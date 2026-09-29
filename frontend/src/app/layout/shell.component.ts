import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationEnd, Router, RouterLink, RouterOutlet } from "@angular/router";
import { filter } from "rxjs";
import { InstagramComponent } from "./instagram.component";

interface NavItem {
  label: string;
  path: string;
  home?: boolean;
}

@Component({
  selector: "app-shell",
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, InstagramComponent],
  template: `
    <header class="mobile-header">
      <a routerLink="/"><img src="assets/logo-mini.png" alt="Dra Renata Sobral" /></a>
      <button type="button" class="burger" aria-label="Menu" (click)="menuOpen = !menuOpen">
        <span></span><span></span><span></span>
      </button>
    </header>
    <div class="page">
      <aside class="sidebar" [class.open]="menuOpen">
        <a class="logo-link" routerLink="/"><img src="assets/logo.png" alt="Transforme-se em você e viva!" /></a>
        <nav class="nav">
          <a
            *ngFor="let item of nav"
            [routerLink]="item.path"
            [class.home-link]="item.home"
            [class.active]="isActive(item)"
            (click)="menuOpen = false"
            >{{ item.label }}</a
          >
        </nav>
        <div class="social">
          <a href="http://www.facebook.com/psicologarenatasobral/" target="_blank" rel="noopener" aria-label="Facebook">
            <svg viewBox="0 0 24 24"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" /></svg>
          </a>
          <a href="http://www.instagram.com/renatasobral.psicologa/" target="_blank" rel="noopener" aria-label="Instagram">
            <svg viewBox="0 0 24 24"><path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 4.6A4.4 4.4 0 1 0 16.4 12 4.4 4.4 0 0 0 12 7.6zm6.2-.9a1 1 0 1 0 1 1 1 1 0 0 0-1-1zM12 9.2A2.8 2.8 0 1 1 9.2 12 2.8 2.8 0 0 1 12 9.2z" /></svg>
          </a>
          <a href="mailto:contato@renatasobralpsicologa.com.br" aria-label="E-mail">
            <svg viewBox="0 0 24 24"><path d="M3 6h18v12H3zm9 7L5 8v8h14V8z" /></svg>
          </a>
          <a href="https://goo.gl/maps/6FuNVhRZMHXoZ1wz7" target="_blank" rel="noopener" aria-label="Mapa">
            <svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5z" /></svg>
          </a>
          <a href="https://wa.me/5519998772525?text=Ol%C3%A1" target="_blank" rel="noopener" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3zm5 12.2c-.2.6-1.2 1.1-1.7 1.1-.4 0-.9.2-3.1-.7-2.6-1.1-4.2-3.8-4.3-4-.1-.2-1-1.3-1-2.5s.6-1.8.9-2 .6-.3.8-.3h.6c.2 0 .4 0 .6.5.2.6.8 2 .8 2.1.1.1 0 .3-.2.5l-.4.4c-.1.1-.2.3 0 .5.3.5 1 1.6 2.1 2.2.2.1.4.1.5-.1l.5-.6c.1-.2.3-.1.5-.1l2 .9c.2.1.3.2.4.3.1.4 0 .9-.2 1.3z" /></svg>
          </a>
        </div>
        <hr class="sidebar-rule" />
        <img class="exel" src="assets/exel.png" alt="Exel Digital" />
      </aside>
      <main class="main">
        <router-outlet></router-outlet>
        <app-instagram></app-instagram>
      </main>
    </div>
    <footer class="site-footer">
      <div><b>Copyright 2021 © Todos os Direitos Reservados.</b></div>
      <div>Desenvolvido por:</div>
      <img src="assets/exel.png" alt="Exel Digital" />
    </footer>
  `,
})
export class ShellComponent {
  menuOpen = false;
  url = "/";
  nav: NavItem[] = [
    { label: "HOME", path: "/", home: true },
    { label: "RENATA SOBRAL", path: "/renata-sobral" },
    { label: "CAMINHO ACADÊMICO", path: "/caminho-academico" },
    { label: "PSICOTERAPIA", path: "/psicoterapia" },
    { label: "O NOVO CONSULTÓRIO", path: "/o-consultorio" },
    { label: "AGENDE SUA CONSULTA", path: "/agende-sua-consulta" },
    { label: "BLOG", path: "/blog" },
  ];

  constructor(private readonly router: Router) {
    this.url = this.router.url;
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.url = this.router.url;
      this.menuOpen = false;
    });
  }

  isActive(item: NavItem): boolean {
    const path = (this.url.split("?")[0] || "/").replace(/\/$/, "") || "/";
    if (item.path === "/renata-sobral") {
      return path === "/" || path === "/renata-sobral";
    }
    if (item.path === "/") {
      return false;
    }
    return path === item.path;
  }
}
