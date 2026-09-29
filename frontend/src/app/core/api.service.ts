import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

export interface StatusPayload {
  status: string;
}

export interface BlockwallPayload {
  enabled: boolean;
}

export interface StudioGate {
  accessRequired: boolean;
  dryRun: boolean;
}

export interface StudioResult {
  dryRun: boolean;
  number?: number;
  url?: string;
  attachments?: string[];
  issue?: {
    title: string;
    body: string;
    labels: string[];
    attachments: string[];
  };
}

@Injectable({ providedIn: "root" })
export class ApiService {
  private readonly base = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  status(): Observable<StatusPayload> {
    return this.http.get<StatusPayload>(`${this.base}/status`);
  }

  blockwall(): Observable<BlockwallPayload> {
    return this.http.get<BlockwallPayload>(`${this.base}/blockwall`);
  }

  studioGate(): Observable<StudioGate> {
    return this.http.get<StudioGate>(`${this.base}/studio/gate`);
  }

  createIssue(accessToken: string, title: string, body: string, files: File[]): Observable<StudioResult> {
    const data = new FormData();
    data.append("title", title);
    data.append("body", body);
    for (const file of files) {
      data.append("attachments", file, file.name);
    }
    let headers = new HttpHeaders();
    if (accessToken) {
      headers = headers.set("X-Studio-Token", accessToken);
    }
    return this.http.post<StudioResult>(`${this.base}/studio/issues`, data, { headers });
  }
}
