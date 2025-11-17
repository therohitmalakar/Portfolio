"use client";

import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import clsx from "clsx";

import { Button, buttonStyles } from "./Button";
import { DownloadResumeButton } from "./DownloadResumeButton";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "resume", label: "Resume", href: "/#resume" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "about", label: "About", href: "/#about" },
  { id: "toolstack", label: "Toolstack", href: "/#toolstack" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-bg/80 backdrop-blur-xl lg:hidden">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/#home" className="text-sm font-semibold uppercase tracking-widest text-muted">
          Rohit Malakar
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            aria-label="Open navigation menu"
            onClick={() => setOpen(true)}
            className="rounded-full border border-white/10 p-2"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <Dialog open={open} onClose={setOpen} className="relative z-50 lg:hidden">
        <Dialog.Backdrop className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-bg p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold text-white">Navigate</p>
            <Button variant="ghost" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="mt-8 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="block rounded-2xl border border-white/5 px-4 py-3 text-base font-semibold text-muted hover:border-accent hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 space-y-4">
            <DownloadResumeButton fullWidth />
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className={clsx(buttonStyles({ variant: "secondary", size: "md", fullWidth: true }))}
            >
              Let’s Talk
            </Link>
          </div>
        </div>
      </Dialog>
    </header>
  );
}

