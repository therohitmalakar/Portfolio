import Image from "next/image";
import Link from "next/link";

import { toolStack } from "@/lib/content";

export default function ToolStackGrid() {
  return (
    <section id="toolstack" className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">Toolstack</p>
          <h2 className="text-3xl font-semibold text-white">Favourite Tools</h2>
        </div>
        <p className="text-sm text-muted">Always iterating and adding more.</p>
      </header>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {toolStack.map((tool) => (
          <Link
            key={tool.tool}
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[24px] border border-white/5 bg-white/[0.03] p-5 transition hover:border-accent"
          >
            <div className="flex items-center gap-4">
              <Image
                src={tool.image}
                alt={tool.tool}
                width={48}
                height={48}
                className="h-12 w-12 rounded-2xl object-contain grayscale transition group-hover:grayscale-0"
              />
              <div>
                <p className="text-lg font-semibold text-white">{tool.tool}</p>
                <p className="text-xs uppercase tracking-wider text-muted">Core stack</p>
              </div>
            </div>
            <span className="mt-4 inline-flex items-center gap-2 text-sm text-muted group-hover:text-white">
              Visit site <span aria-hidden>↗</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

