import { Agent, CursorAgentError } from "@cursor/sdk";

const eventName = process.env.GITHUB_EVENT_NAME;
const event = JSON.parse(process.env.GITHUB_EVENT_PAYLOAD || "{}");
const repo = process.env.GITHUB_REPOSITORY;
const apiKey = process.env.CURSOR_API_KEY;

function issueText() {
  const issue = event.issue || {};
  const title = issue.title || "";
  const body = issue.body || "";
  if (eventName === "issue_comment") {
    const comment = event.comment?.body || "";
    return { title, body: `${body}\n\nCorreção pedida no comentário:\n${comment}`, number: issue.number };
  }
  return { title, body, number: issue.number };
}

const task = issueText();
const classifyPrompt = [
  `Repositório ${repo}. Issue #${task.number}: ${task.title}`,
  task.body,
  "Classifique a complexidade deste pedido de 1 a 5.",
  "1 a 3: correção pequena, no máximo alguns commits no branch base.",
  "4 a 5: mudança maior, que deve abrir um pull request e deixá-lo aberto.",
  "Responda somente com o número.",
].join("\n\n");

const cloudBase = {
  repos: [{ url: `https://github.com/${repo}`, startingRef: "main" }],
  skipReviewerRequest: true,
};

async function prompt(text, autoCreatePR) {
  try {
    const result = await Agent.prompt(text, {
      apiKey,
      model: { id: "composer-2.5" },
      cloud: {
        ...cloudBase,
        autoCreatePR,
        workOnCurrentBranch: !autoCreatePR,
      },
    });
    if (result.status === "error") {
      console.error("run failed", result.id);
      process.exit(2);
    }
    return result;
  } catch (err) {
    if (err instanceof CursorAgentError) {
      console.error("startup failed:", err.message);
      process.exit(1);
    }
    throw err;
  }
}

const classified = await prompt(classifyPrompt, false);
const raw = String(classified.result || "");
const match = raw.match(/[1-5]/);
const complexity = match ? Number(match[0]) : 3;
const openPr = complexity >= 4;

const workPrompt = [
  `Você está no repositório ${repo}, issue #${task.number}.`,
  `Título: ${task.title}`,
  task.body,
  `Complexidade avaliada: ${complexity}.`,
  openPr
    ? "Abra um pull request e deixe-o aberto. Não faça merge."
    : "Faça os commits no branch base (main). Não abra pull request.",
  "A etiqueta do issue é solve. Não invente texto do site. Não crie um workflow semanal nem trate comentários [POST].",
].join("\n\n");

const done = await prompt(workPrompt, openPr);
console.log("agent finished", done.status, "complexity", complexity, "pullRequest", openPr);
