import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-freud",
  standalone: true,
  template: `
    <blockquote class="quote">
      <p>“Olhe para dentro, para as suas profundezas,<br />aprenda primeiro a se conhecer”</p>
      <p class="who">Sigmund Freud</p>
    </blockquote>
  `,
})
export class FreudComponent implements OnInit {
  constructor(private readonly title: Title) {}
  ngOnInit(): void {
    this.title.setTitle("HOME – Dra Renata Sobral");
  }
}
