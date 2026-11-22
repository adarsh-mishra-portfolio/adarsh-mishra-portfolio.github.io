/**
 * Helper to resolve public assets reliably across local dev and GitHub Pages base paths.
 */
export const getAssetUrl = (path: string): string => {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const cleanPath = path.startsWith('./')
    ? path.slice(2)
    : path.startsWith('/')
    ? path.slice(1)
    : path;
  const base = import.meta.env.BASE_URL || '/';
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return `${prefix}${cleanPath}`;
};
