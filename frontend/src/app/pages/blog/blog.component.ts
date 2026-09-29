import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Title } from "@angular/platform-browser";
import { RouterLink } from "@angular/router";
import { POSTS } from "../../content/posts";

@Component({
  selector: "app-blog",
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <a class="blog-card" *ngFor="let post of posts" [routerLink]="post.path">
      <img [src]="post.image" [alt]="post.title" />
      <div>
        <h2>{{ post.title }}</h2>
        <p>{{ post.excerpt }}</p>
        <time>{{ post.date }}</time>
      </div>
    </a>
  `,
})
export class BlogComponent implements OnInit {
  posts = POSTS;
  constructor(private readonly title: Title) {}
  ngOnInit(): void {
    this.title.setTitle("BLOG – Dra Renata Sobral");
  }
}
