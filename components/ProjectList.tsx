"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

import { projects } from "@/lib/content";

import { ProjectCard } from "./ProjectCard";

const ProjectModal = dynamic(() => import("./ProjectModal"), { ssr: false });

export default function ProjectList() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (project: (typeof projects)[number]) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <section id="projects" className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">Projects</p>
          <h2 className="text-3xl font-semibold text-white">Recent Work</h2>
        </div>
        <p className="text-sm text-muted">Hover for motion, click for quick details.</p>
      </header>
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} project={project} onOpenDetails={handleOpen} />
        ))}
      </div>
      <ProjectModal project={selectedProject} open={open} onClose={handleClose} />
    </section>
  );
}

