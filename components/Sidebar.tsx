"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import { BsCalendar2Fill } from "react-icons/bs";
import { FaToolbox } from "react-icons/fa";
import { IoDocumentText, IoPersonSharp } from "react-icons/io5";
import { RiHome5Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

import { ThemeToggle } from "./ThemeToggle";
import { resumeDrive } from "@/lib/content";

const navItems = [
  { id: "home", label: "Home", icon: RiHome5Fill, href: "/#home" },
  { id: "resume", label: "Resume", icon: IoDocumentText, href: "/#resume" },
  { id: "projects", label: "Projects", icon: BsCalendar2Fill, href: "/#projects" },
  { id: "about", label: "About", icon: IoPersonSharp, href: "/#about" },
  { id: "toolstack", label: "Toolstack", icon: FaToolbox, href: "/#toolstack" },
  { id: "contact", label: "Contact", icon: BiSolidMessageSquareDots, href: "/#contact" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const handleHash = () => setHash(window.location.hash);
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const activeId = useMemo(() => {
    if (hash) {
      return hash.replace("#", "");
    }
    const pathSection = pathname.replace("/", "");
    return pathSection || "home";
  }, [hash, pathname]);

  return (
    <motion.aside
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="pointer-events-none fixed inset-y-4 left-4 z-40 hidden lg:flex"
      aria-label="Primary"
    >
      <div className="pointer-events-auto glass-panel flex h-full w-16 flex-col items-center justify-between rounded-3xl px-2 py-6">
        <nav className="space-y-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                aria-label={item.label}
                className={`group/nav relative flex h-12 w-12 items-center justify-center rounded-2xl transition ${
                  isActive ? "bg-white/10 text-white shadow-outline" : "text-muted hover:text-white"
                }`}
              >
                <Icon aria-hidden className="text-lg" />
                <span className="pointer-events-none absolute left-14 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white opacity-0 backdrop-blur group-hover/nav:opacity-100">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
        <div className="flex flex-col items-center gap-3">
          <a
            href={resumeDrive.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download resume"
            className="group relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 text-white transition hover:border-accent hover:text-accent"
          >
            <Download className="h-5 w-5" />
            <span className="pointer-events-none absolute left-14 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white opacity-0 backdrop-blur group-hover:opacity-100">
              Resume
            </span>
          </a>
          <ThemeToggle showLabel={false} size="compact" />
        </div>
      </div>
    </motion.aside>
  );
}
