import { getProjects } from "@/lib/api";
import Link from "next/link";

export default async function Projects() {
  const items = await getProjects();

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Projects</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {items.map((p: any) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="block border border-zinc-800 p-5 rounded-xl hover:border-zinc-600 transition"
          >
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-zinc-400 text-sm mt-2">{p.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
