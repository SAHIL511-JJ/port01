import { getExperience } from "@/lib/api";

export default async function Experience() {
  const exp = await getExperience();

  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-bold">Experience</h2>

      {exp.map((e: any, i: number) => (
        <div
          key={i}
          className="border border-zinc-800 p-4 rounded-xl bg-zinc-950/60"
        >
          <h3 className="font-semibold">
            {e.role} • {e.company}
          </h3>
          <p className="text-zinc-400 text-sm">{e.duration}</p>
        </div>
      ))}
    </section>
  );
}
