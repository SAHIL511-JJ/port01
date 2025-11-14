import Image from "next/image";

export default function HomePage() {
  return (
    <div className="space-y-24">

      {/* HERO SECTION */}
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



      {/* ABOUT ME SECTION */}
      <section className="space-y-6 max-w-3xl">
        <h2 className="text-3xl font-bold">About Me</h2>

        <p className="text-zinc-400 leading-relaxed text-lg">
          I’m a tech enthusiast who enjoys building clean and simple applications
          using Python, HTML, and JavaScript. I love experimenting with new ideas,
          learning how things work behind the scenes, and turning small concepts
          into working projects.
        </p>

        <p className="text-zinc-400 leading-relaxed text-lg">
          I’m always exploring new tools, improving my coding skills, and creating
          things that are easy to use and fun to build.
        </p>
      </section>

    </div>
  );
}
