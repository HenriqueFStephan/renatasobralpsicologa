import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Post, postBySlug } from "../../content/posts";

@Component({
  selector: "app-post",
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <article class="post-page" *ngIf="post; else missing">
      <a routerLink="/"><img class="post-logo" src="assets/logo-post.png" alt="Dra Renata Sobral" /></a>
      <h1>{{ post.title }}</h1>
      <div class="body">
        <p *ngFor="let paragraph of post.paragraphs">{{ paragraph }}</p>
      </div>
      <section class="comments">
        <h2>Deixe um comentário</h2>
        <p>O seu endereço de e-mail não será publicado. Campos obrigatórios são marcados com *</p>
        <form (submit)="$event.preventDefault()">
          <label for="comment">Comentário *</label>
          <textarea id="comment" name="comment" rows="6" required></textarea>
          <label for="author">Nome *</label>
          <input id="author" name="author" required />
          <label for="email">E-mail *</label>
          <input id="email" name="email" type="email" required />
          <label for="url">Site</label>
          <input id="url" name="url" />
          <label>
            <input type="checkbox" name="remember" />
            Salvar meus dados neste navegador para a próxima vez que eu comentar.
          </label>
          <button type="submit">Publicar comentário</button>
        </form>
      </section>
      <a routerLink="/"><img class="post-logo" src="assets/logo-post.png" alt="Dra Renata Sobral" /></a>
      <p class="post-footer">Todos os direitos reservados</p>
    </article>
    <ng-template #missing>
      <article class="post-page">
        <p>Texto não encontrado.</p>
      </article>
    </ng-template>
  `,
})
export class PostComponent implements OnInit {
  post: Post | undefined;

  constructor(private readonly route: ActivatedRoute, private readonly title: Title) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.post = postBySlug(params.get("slug") || "");
      this.title.setTitle(this.post ? `${this.post.title} – Dra Renata Sobral` : "Dra Renata Sobral");
    });
  }
}
