import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationEnd, Router, RouterOutlet } from "@angular/router";
import { filter } from "rxjs";
import { ApiService } from "./core/api.service";
import { CookieBarComponent } from "./layout/cookie-bar.component";
import { MaintenanceComponent } from "./pages/maintenance/maintenance.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, CookieBarComponent, MaintenanceComponent],
  template: `
    <app-maintenance *ngIf="blocked"></app-maintenance>
    <router-outlet *ngIf="!blocked"></router-outlet>
    <app-cookie-bar *ngIf="!blocked && showCookie"></app-cookie-bar>
  `,
})
export class AppComponent implements OnInit {
  private enabled = false;
  blocked = false;
  showCookie = true;

  constructor(private readonly api: ApiService, private readonly router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => this.sync());
    this.sync();
    this.api.blockwall().subscribe({
      next: (payload) => {
        this.enabled = payload.enabled;
        this.sync();
      },
      error: () => {
        this.enabled = false;
        this.sync();
      },
    });
  }

  private sync(): void {
    const path = this.router.url.split("?")[0];
    const studio = path === "/studio" || path.startsWith("/studio/");
    this.blocked = this.enabled && !studio;
    this.showCookie = !studio && !this.blocked;
  }
}
