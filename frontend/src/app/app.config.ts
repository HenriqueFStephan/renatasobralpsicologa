import { ApplicationConfig } from "@angular/core";
import { provideHttpClient } from "@angular/common/http";
import { provideRouter, UrlSerializer, withInMemoryScrolling } from "@angular/router";
import { routes } from "./app.routes";
import { StripSlashSerializer } from "./core/trailing-slash";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: "top" })),
    provideHttpClient(),
    { provide: UrlSerializer, useClass: StripSlashSerializer },
  ],
};
