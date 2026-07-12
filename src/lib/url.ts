// Prefixes a root-relative path (e.g. "/assets/foo.jpg") with Vite's configured
// base path, so links and images resolve correctly whether the site is served
// from a domain root or a GitHub Pages project subpath (e.g. /portfolio/).
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}
