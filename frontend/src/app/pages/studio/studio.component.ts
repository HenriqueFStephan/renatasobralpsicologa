import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { ApiService, StudioResult } from "../../core/api.service";

@Component({
  selector: "app-studio",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="studio">
      <h1>Studio</h1>
      <p class="note" *ngIf="dryRun">Criar um issue é um ensaio: GITHUB_STUDIO_TOKEN ainda não está definido.</p>
      <form (submit)="submit($event)">
        <label for="access" *ngIf="accessRequired">STUDIO_ACCESS_TOKEN</label>
        <input id="access" type="password" *ngIf="accessRequired" [(ngModel)]="accessToken" name="access" />
        <label for="title">Título</label>
        <input id="title" name="title" [(ngModel)]="title" required />
        <label for="body">Descrição</label>
        <textarea id="body" name="body" rows="8" [(ngModel)]="body"></textarea>
        <label for="files">Anexos</label>
        <input id="files" name="files" type="file" multiple (change)="onFiles($event)" />
        <button type="submit" [disabled]="sending">Enviar</button>
      </form>
      <p class="error" *ngIf="error">{{ error }}</p>
      <p *ngIf="result?.dryRun">Ensaio registrado. Nenhum issue foi aberto.</p>
      <p *ngIf="result && !result.dryRun">
        Issue
        <a [href]="result.url" target="_blank" rel="noopener">#{{ result.number }}</a>
        aberto com a etiqueta solve.
      </p>
    </section>
  `,
})
export class StudioComponent implements OnInit {
  accessRequired = false;
  dryRun = false;
  accessToken = "";
  title = "";
  body = "";
  files: File[] = [];
  sending = false;
  error = "";
  result: StudioResult | null = null;

  constructor(private readonly api: ApiService, private readonly titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle("Studio");
    this.api.studioGate().subscribe({
      next: (gate) => {
        this.accessRequired = gate.accessRequired;
        this.dryRun = gate.dryRun;
      },
      error: () => {
        this.error = "A API não respondeu.";
      },
    });
  }

  onFiles(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.files = input.files ? Array.from(input.files) : [];
  }

  submit(event: Event): void {
    event.preventDefault();
    this.error = "";
    this.result = null;
    this.sending = true;
    this.api.createIssue(this.accessToken, this.title, this.body, this.files).subscribe({
      next: (result) => {
        this.result = result;
        this.sending = false;
      },
      error: (err) => {
        this.error = err?.error?.detail || "Não foi possível enviar.";
        this.sending = false;
      },
    });
  }
}
