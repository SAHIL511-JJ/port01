import Image from "next/image";

export default function HomePage() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center py-12">
      
      {/* LEFT SIDE TEXT */}
      <div className="space-y-6">
        <h1 className="text-5xl font-extrabold leading-tight">
          A Developer with a
          <br />
          Problem-Solving Mind
        </h1>

        <p className="text-zinc-400 text-lg max-w-md">
          I build clean, modern, high-performance web applications using
          Python, FastAPI, and JavaScript.
        </p>

        <a
          href="/projects"
          className="inline-block px-6 py-3 rounded-xl border border-zinc-700 hover:border-zinc-400 transition text-sm"
        >
          View My Work →
        </a>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex justify-center md:justify-end">
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border border-zinc-800">
          <Image
            src="/sahil-hero.jpg"
            alt="Portrait"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
