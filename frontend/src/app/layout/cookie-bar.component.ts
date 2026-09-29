import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface CookieCategory {
  name: string;
  note: string;
  text: string;
}

@Component({
  selector: "app-cookie-bar",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cookie-bar" *ngIf="visible">
      <p>
        Usamos cookies em nosso site para fornecer a experiência mais relevante, lembrando suas preferências e visitas
        repetidas. Ao clicar em “Aceitar”, concorda com a utilização de TODOS os cookies.
      </p>
      <div class="cookie-actions">
        <button type="button" class="btn-settings" (click)="open = true">Configurações de Cookies</button>
        <button type="button" class="btn-accept" (click)="accept()">Aceitar</button>
      </div>
    </div>
    <div class="cookie-modal" *ngIf="open" (click)="open = false">
      <div class="cookie-panel" (click)="$event.stopPropagation()">
        <header>
          <h4>Privacy Overview</h4>
          <button type="button" class="btn-settings" (click)="open = false">Fechar</button>
        </header>
        <p>
          This website uses cookies to improve your experience while you navigate through the website. Out of these, the
          cookies that are categorized as necessary are stored on your browser as they are essential for the working of
          basic functionalities of the ...
        </p>
        <div class="cookie-cat" *ngFor="let cat of categories">
          <strong>{{ cat.name }}</strong>
          <em *ngIf="cat.note">{{ cat.note }}</em>
          <p>{{ cat.text }}</p>
        </div>
        <button type="button" class="save" (click)="accept()">SALVAR E ACEITAR</button>
      </div>
    </div>
  `,
})
export class CookieBarComponent {
  visible = true;
  open = false;
  categories: CookieCategory[] = [
    {
      name: "Necessary",
      note: "Sempre ativado",
      text: "Necessary cookies are absolutely essential for the website to function properly. These cookies ensure basic functionalities and security features of the website, anonymously.",
    },
    {
      name: "Functional",
      note: "",
      text: "Functional cookies help to perform certain functionalities like sharing the content of the website on social media platforms, collect feedbacks, and other third-party features.",
    },
    {
      name: "Performance",
      note: "",
      text: "Performance cookies are used to understand and analyze the key performance indexes of the website which helps in delivering a better user experience for the visitors.",
    },
    {
      name: "Analytics",
      note: "",
      text: "Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics the number of visitors, bounce rate, traffic source, etc.",
    },
    {
      name: "Advertisement",
      note: "",
      text: "Advertisement cookies are used to provide visitors with relevant ads and marketing campaigns. These cookies track visitors across websites and collect information to provide customized ads.",
    },
    {
      name: "Others",
      note: "",
      text: "Other uncategorized cookies are those that are being analyzed and have not been classified into a category as yet.",
    },
  ];

  constructor() {
    this.visible = localStorage.getItem("renata-cookies") !== "accepted";
  }

  accept(): void {
    localStorage.setItem("renata-cookies", "accepted");
    this.visible = false;
    this.open = false;
  }
}
