"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Project = {
  image: string;
  name: string;
  link: string;
};

type ProjectCardProps = {
  project: Project;
  index: number;
  onOpenDetails: (project: Project) => void;
};

export function ProjectCard({ project, index, onOpenDetails }: ProjectCardProps) {
  return (
    <motion.article
      layout
      whileHover={{ y: -6, scale: 1.01 }}
      className="group relative overflow-hidden rounded-[28px] border border-white/5 bg-gradient-to-br from-white/[0.08] via-surface/40 to-black/40 p-5 text-white"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-muted">0{index + 1}</span>
        <button
          type="button"
          onClick={() => onOpenDetails(project)}
          className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wide text-muted transition hover:border-accent hover:text-white"
        >
          Details
        </button>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <Image
          src={project.image}
          alt={project.name}
          width={72}
          height={72}
          className="h-16 w-16 rounded-2xl object-contain grayscale transition group-hover:grayscale-0"
        />
        <div>
          <h3 className="text-2xl font-semibold">{project.name}</h3>
          <p className="text-sm text-muted">Next.js • Node.js focus</p>
        </div>
      </div>
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.name}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition group-hover:gap-3"
      >
        Visit live
        <span aria-hidden>→</span>
      </Link>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -right-10 top-0 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />
      </div>
    </motion.article>
  );
}

