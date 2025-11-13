import { getProjects } from "@/lib/api";

export default async function ProjectPage(props: any) {
  // ✅ unwrap async params
  const { slug } = await props.params;

  const items = await getProjects();
  const project = items.find((p: any) => p.slug === slug);

  if (!project) {
    return <p className="text-red-500">Project not found</p>;
  }

  return (
    <section className="space-y-8 max-w-3xl">
      <h1 className="text-4xl font-bold">{project.name}</h1>
      <p className="text-zinc-400">{project.description}</p>
    </section>
  );
}
