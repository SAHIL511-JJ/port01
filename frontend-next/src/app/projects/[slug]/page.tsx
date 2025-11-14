"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getProject } from "@/lib/api";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const [project, setProject] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProject(params.slug).then((data) => {
      setProject(data);
      setIsLoading(false);
    }).catch(() => {
      setIsLoading(false);
    });
  }, [params.slug]);

  if (isLoading || !project) {
    return <p className="text-zinc-500">Loading...</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-4xl mx-auto py-16 space-y-12"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-5xl font-extrabold"
      >
        {project.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="text-zinc-400 text-lg max-w-2xl"
      >
        {project.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="aspect-video w-full rounded-xl overflow-hidden border border-zinc-800"
      >
        <iframe
          src={project.video}
          width="100%"
          height="100%"
          allowFullScreen
        />
      </motion.div>
    </motion.div>
  );
}
