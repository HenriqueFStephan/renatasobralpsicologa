import { Component } from "@angular/core";

@Component({
  selector: "app-maintenance",
  standalone: true,
  template: `
    <section class="wall">
      <img src="assets/logo.png" alt="Transforme-se em você e viva!" width="220" />
      <h1>Site em manutenção</h1>
      <p>O site da Dra. Renata Sobral está temporariamente indisponível.</p>
    </section>
  `,
})
export class MaintenanceComponent {}
