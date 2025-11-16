const BASE_URL = "https://backendfor-dir2.onrender.com";

export async function getProjects() {
  const res = await fetch(`${BASE_URL}/projects`, { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export async function getProject(slug: string) {
  const res = await fetch(`${BASE_URL}/projects/${slug}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

export async function getExperience() {
  const res = await fetch(`${BASE_URL}/experience`, { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}
