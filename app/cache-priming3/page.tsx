/** Static page used as a cache-priming target in launch.json. */
export default function CachePriming3Page() {
  return (
    <div className="min-h-screen bg-amber-50 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-amber-600 mb-4">
          3️⃣ Cache Priming 3
        </h1>
        <p className="text-gray-700 mb-4">
          This is the <code className="bg-gray-100 px-2 py-1 rounded">/cache-priming3</code> page
        </p>
        <p className="text-sm text-gray-500">
          Listed under <code className="bg-gray-100 px-1 py-0.5 rounded">cache.cachePriming.urls</code>{" "}
          in <code className="bg-gray-100 px-1 py-0.5 rounded">launch.json</code>, so Launch warms it
          on every deploy. Rendered statically at build time.
        </p>
      </div>
    </div>
  );
}
