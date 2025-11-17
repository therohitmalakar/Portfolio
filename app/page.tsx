import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";
import ToolStackGrid from "@/components/ToolStackGrid";
import { DownloadResumeButton } from "@/components/DownloadResumeButton";
import { resumeTimeline, heroContent } from "@/lib/content";

export default function Home() {
  return (
    <Container className="space-y-16 pb-24 pt-10">
      <Hero />
      <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
        <section id="resume" className="space-y-5 rounded-[32px] border border-white/5 bg-white/[0.02] p-6">
          <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-muted">Resume</p>
              <h2 className="text-3xl font-semibold text-white">Experience</h2>
            </div>
            <DownloadResumeButton variant="secondary" />
          </header>
          <div className="space-y-6">
            {resumeTimeline.map((item, index) => (
              <article key={`${item.company}-${item.timeframe}`} className="relative rounded-3xl border border-white/5 p-5">
                {index !== resumeTimeline.length - 1 && (
                  <span className="absolute left-6 top-full h-6 w-px bg-gradient-to-b from-white/20 to-transparent" aria-hidden />
                )}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{item.company}</h3>
                    <p className="text-sm text-muted">{item.role}</p>
                  </div>
                  <p className="text-sm font-semibold text-muted">{item.timeframe}</p>
                </div>
                <p className="mt-4 text-sm text-muted">{item.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-muted">
                  {item.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 px-3 py-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          id="about"
          className="space-y-4 rounded-[32px] border border-white/5 bg-gradient-to-b from-white/[0.08] to-transparent p-6"
        >
          <header>
            <p className="text-sm font-semibold uppercase tracking-wide text-muted">About</p>
            <h2 className="text-3xl font-semibold text-white">Background</h2>
          </header>
          <p className="text-lg text-muted">{heroContent.bio}</p>
        </section>
      </div>
      <ProjectList />
      <ToolStackGrid />
      <ContactForm />
      <Footer />
    </Container>
  );
}
