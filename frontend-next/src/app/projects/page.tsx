"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getProjects } from "@/lib/api";

export default function ProjectsPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getProjects();
      setItems(data || []);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) {
    return (
      <p className="text-zinc-400 text-center py-10">Loading projects…</p>
    );
  }

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Projects</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {items.map((p: any, i: number) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <Link
              href={`/projects/${p.slug}`}
              className="block border border-zinc-800 p-5 rounded-xl hover:border-zinc-600 transition"
            >
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-zinc-400 text-sm mt-2">{p.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
