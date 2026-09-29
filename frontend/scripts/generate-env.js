const fs = require("fs");
const path = require("path");

const apiUrl = process.env.NG_APP_API_URL || "/api/v1";
const target = path.join(__dirname, "..", "src", "environments", "environment.prod.ts");
const body = `export const environment = {\n  production: true,\n  apiUrl: ${JSON.stringify(apiUrl)},\n};\n`;
fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(target, body);
console.log("Wrote", target, "apiUrl=" + apiUrl);
