"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

import { heroContent, workHighlight, projects, toolStack } from "@/lib/content";

import { buttonStyles } from "./Button";

export default function Hero() {
  const day = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const prefersReducedMotion = useReducedMotion();

  const variants = prefersReducedMotion
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  const stats = [
    { label: "Projects shipped", value: `${projects.length}+`, hint: "client & self-initiated" },
    { label: "Toolstack", value: `${toolStack.length}+`, hint: "JavaScript-first" },
    { label: "Latest role", value: workHighlight.company, hint: workHighlight.timeframe },
  ];

  return (
    <section id="home" className="pt-20">
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className="grid gap-8 rounded-[32px] border border-white/5 bg-gradient-to-br from-white/5 via-surface/40 to-transparent p-6 shadow-soft backdrop-blur lg:grid-cols-12 lg:p-10"
      >
        <div className="space-y-6 lg:col-span-7">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20">
              <Image
                src="/me.jpg"
                alt="avatar"
                width={96}
                height={96}
                priority
                className="h-20 w-20 rounded-[24px] object-cover grayscale transition hover:grayscale-0"
              />
              <span className="absolute -right-3 -top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold">
                Available
              </span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">Based in India</p>
              <p className="text-sm text-muted">{`${heroContent.greetingPrefix} ${day}?`}</p>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{heroContent.headline}</h1>
            <p className="mt-4 text-lg text-muted">{heroContent.bio}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/#contact" className={clsx(buttonStyles({ variant: "primary", size: "md" }))}>
              {heroContent.ctaLabel}
            </Link>
            <Link href="/#projects" className={clsx(buttonStyles({ variant: "secondary", size: "md" }))}>
              View Work
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/5 bg-white/5 px-4 py-4 text-white">
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="text-xs uppercase tracking-wide text-muted">{stat.label}</p>
                <p className="text-[11px] text-muted/80">{stat.hint}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-5 lg:col-span-5">
          <div className="rounded-[28px] border border-white/5 bg-black/50 p-5 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted">Work highlight</p>
            <div className="mt-4 overflow-hidden rounded-2xl">
              <Image
                src={workHighlight.image}
                alt={workHighlight.imageAlt}
                width={614}
                height={1048}
                className="h-64 w-full rounded-2xl object-cover transition duration-700 hover:scale-105"
              />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">{workHighlight.company}</p>
                <p className="text-sm text-muted">{workHighlight.timeframe}</p>
              </div>
              <div className="flex gap-2 text-2xl text-muted" aria-hidden>
                <span>—</span>
                <span>→</span>
              </div>
            </div>
          </div>
          <div className="grid gap-4 rounded-[28px] border border-white/5 bg-white/[0.03] p-4 text-sm text-muted">
            <div className="flex items-center justify-between">
              <p>Focus</p>
              <p className="font-semibold text-white">Next.js • Node.js • MongoDB</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Availability</p>
              <p className="font-semibold text-accent">Open for collaboration</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Response time</p>
              <p>within 24h</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

