/**
 * Outbound links from the marketing site to the RxFlow app.
 *
 * The app is migrating from flow.rxsynapse.com to app.rxsynapse.com. Every
 * link here was a hardcoded flow.rxsynapse.com literal spread across nine
 * components, so the migration would have meant editing each one — and any
 * missed link would silently keep sending users through a redirect.
 *
 * At cutover, set NEXT_PUBLIC_APP_URL=https://app.rxsynapse.com on this
 * service. NEXT_PUBLIC_* is inlined at BUILD time, so it needs a rebuild.
 *
 * ALSO UPDATE public/llms.txt BY HAND at the same time. It is a static asset
 * served verbatim, so it cannot read this constant, and its two app links are
 * the only ones this module does not cover.
 *
 * The default stays on the old host deliberately. Both hosts serve the app
 * today, but auth tokens live in localStorage and are origin-scoped, so
 * sending users to app. before the app itself cuts over would log them out
 * and split sessions across two origins.
 */
export const APP_URL = (
  process.env.NEXT_PUBLIC_APP_URL || 'https://flow.rxsynapse.com'
).replace(/\/+$/, '');

/** Bare host, for prose that names the domain. */
export const APP_HOST = APP_URL.replace(/^https?:\/\//, '');

/** Absolute URL into the app. `appUrl('/docs')`, `appUrl()`. */
export function appUrl(path = ''): string {
  if (!path) return APP_URL;
  return `${APP_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
