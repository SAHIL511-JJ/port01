export async function getProjects() {
  const res = await fetch("http://127.0.0.1:8000/projects", { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export async function getProject(slug: string) {
  const res = await fetch(`http://127.0.0.1:8000/projects/${slug}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

export async function getExperience() {
  const res = await fetch("http://127.0.0.1:8000/experience", { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}
