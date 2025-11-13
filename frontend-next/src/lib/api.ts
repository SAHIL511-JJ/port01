const BASE =
  process.env.NEXT_PUBLIC_API_BASE || "http://127.0.0.1:8000";

// Universal fetch helper
async function fetchJSON(path: string) {
  const url = `${BASE}${path}`;

  try {
    const res = await fetch(url, {
      cache: "no-store",       // IMPORTANT: avoids stale data
      next: { revalidate: 0 }, // IMPORTANT: works with SSR
    });

    if (!res.ok) {
      throw new Error(`API Error: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (err) {
    console.error("❌ Fetch failed:", err);
    throw err;
  }
}

export const getProjects = () => fetchJSON("/projects");
export const getExperience = () => fetchJSON("/experience");
