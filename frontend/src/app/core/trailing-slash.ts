import { DefaultUrlSerializer, UrlTree } from "@angular/router";

/** Old WordPress links end with a slash. Match them to the same route. */
export class StripSlashSerializer extends DefaultUrlSerializer {
  override parse(url: string): UrlTree {
    const [path, extra] = url.split(/([?#].*)/);
    const trimmed = path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
    return super.parse(extra ? trimmed + extra : trimmed);
  }
}
