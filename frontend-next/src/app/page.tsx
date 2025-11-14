import Image from "next/image";

export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* ================= HERO SECTION ================= */}
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

      {/* ================= ABOUT ME SECTION ================= */}
      <section className="space-y-6 max-w-3xl">
        <h2 className="text-3xl font-bold">About Me</h2>

        <p className="text-zinc-400 leading-relaxed text-lg">
          I’m a tech enthusiast who enjoys building clean and simple applications
          using Python, HTML, and JavaScript. I love experimenting with new ideas,
          learning how things work behind the scenes, and turning small concepts
          into working projects. I'm always exploring new tools, improving my
          coding skills, and creating things that are easy to use and fun to build.
        </p>
      </section>

      {/* ================= TECH STACK SECTION ================= */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Tech Stack</h2>

        <div className="flex flex-wrap gap-4">
          {["Python", "FastAPI", "JavaScript", "HTML", "CSS", "Next.js"].map(
            (tech) => (
              <div
                key={tech}
                className="px-6 py-3 rounded-xl border border-zinc-800 bg-zinc-900/40
                           text-sm backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)]
                           hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]
                           hover:border-zinc-600 transition"
              >
                {tech}
              </div>
            )
          )}
        </div>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Skills</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Python", level: 85 },
            { name: "JavaScript", level: 75 },
            { name: "FastAPI", level: 70 },
            { name: "HTML", level: 90 },
            { name: "CSS", level: 80 },
            { name: "Next.js", level: 65 },
          ].map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/40
                         hover:border-zinc-600 transition space-y-3
                         backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)]
                         hover:shadow-[0_0_22px_rgba(255,255,255,0.10)]"
            >
              <div className="flex justify-between">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-zinc-400 text-sm">{skill.level}%</span>
              </div>

              <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-400 transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
