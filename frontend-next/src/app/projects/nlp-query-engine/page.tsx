import Link from "next/link";

export default async function NLPQueryEnginePage() {
  return (
    <div className="max-w-5xl mx-auto py-16 space-y-16">
      
      {/* HEADER */}
      <header className="space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight">
          NLP Query Engine
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
          A natural language query system for databases and documents — powered by 
          dynamic schema discovery, hybrid SQL + document search, TF-IDF ranking, 
          caching, pagination, and export tools.
        </p>

        <Link
          href="https://github.com/SAHIL511-JJ/nlp-engine"
          target="_blank"
          className="inline-block text-sm px-4 py-2 border border-zinc-700 rounded-lg hover:bg-white hover:text-black transition"
        >
          View on GitHub →
        </Link>
      </header>

      {/* VIDEO */}
      <section className="space-y-4">
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
      </section>

      {/* OVERVIEW */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>

        <p className="text-zinc-400 leading-relaxed">
          NLP Query Engine lets users query both <strong>structured databases</strong> 
          and <strong>unstructured documents</strong>. It automatically detects schemas, 
          classifies queries, and performs hybrid semantic + SQL retrieval for the most 
          accurate results.
        </p>

        <ul className="list-disc ml-6 text-zinc-400 space-y-2">
          <li>Dynamic schema discovery — no hardcoded DB models.</li>
          <li>Upload and index PDFs, DOCX, TXT, CSV files.</li>
          <li>Hybrid semantic search + SQL aggregation.</li>
          <li>TF-IDF + cosine similarity scoring.</li>
          <li>Fast pagination + caching layer.</li>
          <li>CSV / JSON export for results.</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How Query Processing Works</h2>

        <ol className="list-decimal ml-6 text-zinc-400 space-y-2">
          <li>Detect whether query is about Files or Database.</li>
          <li>Classify query type (aggregation, filter, lookup, etc.).</li>
          <li>Run SQL + document search when needed.</li>
          <li>Rank results using semantic similarity.</li>
          <li>Apply pagination and cache layers.</li>
          <li>Return structured tables + a natural-language answer.</li>
        </ol>
      </section>

      {/* TECH STACK */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Tech Stack</h2>

        <ul className="list-disc ml-6 text-zinc-400 space-y-2">
          <li>Python FastAPI backend</li>
          <li>SpaCy / NLTK for NLP</li>
          <li>Sentence-transformers for vector embeddings</li>
          <li>PostgreSQL / SQLite support</li>
          <li>Custom GPT-based document pipeline (PDF, DOCX, TXT, CSV)</li>
        </ul>
      </section>

      {/* GITHUB BUTTON */}
      <section>
        <a
          href="https://github.com/SAHIL511-JJ/nlp-engine"
          target="_blank"
          className="inline-block px-5 py-2 border border-zinc-600 rounded-lg hover:bg-white hover:text-black transition text-sm"
        >
          View Full Source on GitHub →
        </a>
      </section>
    </div>
  );
}
