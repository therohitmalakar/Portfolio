"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { sendEmail, type ContactPayload } from "@/lib/email";
import { socials } from "@/lib/content";

import { Button, buttonStyles } from "./Button";

const initialState: ContactPayload = {
  name: "",
  email: "",
  message: "",
  company: "",
};

export default function ContactForm() {
  const [formState, setFormState] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const validations = {
    name: formState.name.trim().length >= 2,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email),
    message: formState.message.trim().length >= 10,
  };

  const isFormValid = Object.values(validations).every(Boolean);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isFormValid || formState.company) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    try {
      setLoading(true);
      setStatus("idle");
      setErrorMessage("");
      await sendEmail(formState);
      setStatus("success");
      setFormState(initialState);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Sending failed. Try again or use the email link below.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="space-y-6">
      <header>
        <p className="text-sm font-semibold uppercase tracking-wide text-muted">Contact</p>
        <h2 className="text-3xl font-semibold text-white">Get In Touch</h2>
        <p className="mt-2 text-sm text-muted">Helper text: I typically reply within a business day.</p>
      </header>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
        <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-white/5 bg-surface/60 p-6">
          <div hidden aria-hidden>
            <label>
              Company
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                value={formState.company}
                onChange={handleChange}
                className="sr-only"
              />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-muted">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-muted focus:border-accent"
                placeholder="Enter your full name"
                required
                minLength={2}
              />
              <p className="mt-1 text-xs text-muted">Minimum 2 characters</p>
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-muted">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-muted focus:border-accent"
                placeholder="enter your email address"
                required
              />
              <p className="mt-1 text-xs text-muted">We’ll only use this to reply to you.</p>
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-semibold text-muted">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-muted focus:border-accent"
              placeholder="Say Hi!!"
              rows={5}
              required
              minLength={10}
            />
            <p className="mt-1 text-xs text-muted">At least 10 characters so I can understand your request.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button type="submit" disabled={!isFormValid || loading} fullWidth className="sm:w-auto">
              {loading ? "Sending..." : "Send Message"}
            </Button>
            <Link
              href="mailto:therohitmalakar@gmail.com"
              className={buttonStyles({ variant: "ghost", size: "md" })}
            >
              Use mailto
            </Link>
          </div>
          {status === "success" && (
            <p role="status" className="text-sm text-success">
              Message sent successfully. Talk to you soon!
            </p>
          )}
          {status === "error" && (
            <p role="status" className="text-sm text-error">
              {errorMessage}
            </p>
          )}
        </form>
        <aside className="space-y-6 rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.05] to-transparent p-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">Direct line</p>
            <a
              href="mailto:therohitmalakar@gmail.com"
              className="mt-2 inline-flex text-lg font-semibold text-white underline-offset-4 hover:underline"
            >
              therohitmalakar@gmail.com
            </a>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">Socials</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon =
                  social.icon === "instagram"
                    ? FaInstagram
                    : social.icon === "linkedin"
                    ? FaLinkedin
                    : social.icon === "twitter"
                    ? FaXTwitter
                    : FaGithub;
                return (
                  <Link
                    key={social.id}
                    href={social.href}
                    aria-label={social.label}
                    className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 text-muted transition hover:border-accent hover:text-white"
                  >
                    <Icon aria-hidden />
                  </Link>
                );
              })}
            </div>
          </div>
          <p className="text-xs text-muted">
            Prefer serverless email? Uncomment <code>sendViaServer</code> inside the form to POST to <code>/api/contact</code>.
          </p>
        </aside>
      </div>
    </section>
  );
}

