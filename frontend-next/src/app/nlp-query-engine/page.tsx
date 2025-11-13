export default function NLPQueryEngine() {
  return (
    <section className="space-y-8 max-w-3xl">
      <h1 className="text-4xl font-bold">NLP Query Engine</h1>

      <p className="text-zinc-400 leading-relaxed">
        NLP Query Engine is a natural-language interface for querying structured
        databases and unstructured documents (PDF, DOCX, TXT, CSV).
        It supports hybrid SQL + search results, dynamic schema discovery,
        TF-IDF ranking, caching, pagination, and full data export.
      </p>

      <a
        href="https://github.com/SAHIL511-JJ/nlp-engine"
        target="_blank"
        className="inline-block text-sm px-4 py-2 border border-zinc-700 rounded-lg hover:bg-white hover:text-black transition"
      >
        View on GitHub →
      </a>

      <h2 className="text-2xl font-semibold">Demo Video</h2>

      <div className="aspect-video w-full rounded-xl overflow-hidden border border-zinc-800">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/V4By3qqHRP8"
          title="NLP Query Engine Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <h2 className="text-2xl font-semibold">Features</h2>
      <ul className="list-disc ml-6 text-zinc-400 space-y-2">
        <li>Dynamic schema discovery — no hardcoded DB models</li>
        <li>Hybrid SQL + document search results</li>
        <li>Upload & index PDFs, DOCX, TXT, CSV for semantic search</li>
        <li>Query classifier and ranking system</li>
        <li>Pagination, caching & export support</li>
        <li>Metrics tracking and history</li>
      </ul>
    </section>
  );
}
