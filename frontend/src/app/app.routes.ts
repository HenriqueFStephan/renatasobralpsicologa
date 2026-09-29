import { Routes } from "@angular/router";
import { ShellComponent } from "./layout/shell.component";

export const routes: Routes = [
  {
    path: "studio",
    loadComponent: () => import("./pages/studio/studio.component").then((m) => m.StudioComponent),
  },
  {
    path: "psicanalise/:slug",
    loadComponent: () => import("./pages/post/post.component").then((m) => m.PostComponent),
  },
  {
    path: "blog/:slug",
    loadComponent: () => import("./pages/post/post.component").then((m) => m.PostComponent),
  },
  {
    path: "",
    component: ShellComponent,
    children: [
      {
        path: "",
        loadComponent: () => import("./pages/home/home.component").then((m) => m.HomeComponent),
        pathMatch: "full",
      },
      {
        path: "renata-sobral",
        loadComponent: () => import("./pages/home/home.component").then((m) => m.HomeComponent),
      },
      {
        path: "home",
        loadComponent: () => import("./pages/freud/freud.component").then((m) => m.FreudComponent),
      },
      {
        path: "caminho-academico",
        loadComponent: () => import("./pages/caminho/caminho.component").then((m) => m.CaminhoComponent),
      },
      {
        path: "psicoterapia",
        loadComponent: () => import("./pages/psicoterapia/psicoterapia.component").then((m) => m.PsicoterapiaComponent),
      },
      {
        path: "o-consultorio",
        loadComponent: () => import("./pages/consultorio/consultorio.component").then((m) => m.ConsultorioComponent),
      },
      {
        path: "agende-sua-consulta",
        loadComponent: () => import("./pages/agende/agende.component").then((m) => m.AgendeComponent),
      },
      {
        path: "blog",
        loadComponent: () => import("./pages/blog/blog.component").then((m) => m.BlogComponent),
      },
      {
        path: "politica-de-privacidade",
        loadComponent: () => import("./pages/privacy/privacy.component").then((m) => m.PrivacyComponent),
      },
    ],
  },
];
