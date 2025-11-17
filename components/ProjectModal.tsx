"use client";

import { Dialog } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

import clsx from "clsx";

import { Button, buttonStyles } from "./Button";

type Project = {
  image: string;
  name: string;
  link: string;
};

type ProjectModalProps = {
  project: Project | null;
  open: boolean;
  onClose: () => void;
};

export default function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <Dialog.Backdrop className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="glass-panel w-full max-w-md rounded-3xl p-6 text-white">
          <Dialog.Title className="text-2xl font-semibold">{project.name}</Dialog.Title>
          <div className="mt-4 rounded-2xl bg-white/5 p-4">
            <Image
              src={project.image}
              alt={project.name}
              width={320}
              height={200}
              className="h-40 w-full rounded-2xl object-contain"
            />
          </div>
          <p className="mt-4 text-sm text-muted">
            This project showcases the same stack highlighted on the main site. Explore the live link for full context.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={onClose} variant="secondary">
              Close
            </Button>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(buttonStyles({ variant: "primary", size: "md" }))}
            >
              Visit Project
            </Link>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

