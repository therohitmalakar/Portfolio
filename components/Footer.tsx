import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { socials } from "@/lib/content";

const iconMap = {
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  github: FaGithub,
  twitter: FaXTwitter,
};

export default function Footer() {
  return (
    <footer className="mt-16 flex flex-col items-center gap-6 border-t border-white/5 pt-8 pb-12 text-center">
      <div className="flex flex-wrap justify-center gap-3">
        {socials.map((social) => {
          const Icon = iconMap[social.icon as keyof typeof iconMap] ?? FaGithub;
          return (
            <Link
              key={social.id}
              href={social.href}
              aria-label={social.label}
              className="group inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 text-xl text-muted transition hover:border-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Icon aria-hidden />
            </Link>
          );
        })}
      </div>
      <div>
        <p className="text-sm text-white">Thanks for Visiting.</p>
        <p className="text-xs text-muted">Have a nice day</p>
      </div>
    </footer>
  );
}

