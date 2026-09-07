// functions/cache_priming_cloud.js

/**
 * Cloud function used as a cache-priming target. Served at /cache_priming_cloud.
 *
 * It is listed in launch.json under cache.cachePriming.urls, so Launch calls it
 * right after each deploy. The explicit s-maxage matters: a function response
 * with no cache headers is re-executed on every request, and priming it would
 * buy nothing.
 *
 * `generatedAt` is stamped at execution time, so it doubles as a cache probe --
 * request the route twice and an unchanged timestamp means the second response
 * came from the edge cache instead of a fresh invocation.
 */

const S_MAXAGE_SECONDS = 300;

export default function handler(request, response) {
  const generatedAt = new Date().toISOString();

  response.setHeader(
    "Cache-Control",
    `public, max-age=0, s-maxage=${S_MAXAGE_SECONDS}, stale-while-revalidate=60`
  );
  response.setHeader("X-Cache-Priming", "cloud-function");

  response.status(200).json({
    route: "/cache_priming_cloud",
    type: "cloud-function",
    generatedAt,
    sMaxAgeSeconds: S_MAXAGE_SECONDS,
    query: request.query,
    hint: "Call twice; if generatedAt is unchanged the response was cached.",
  });
}
