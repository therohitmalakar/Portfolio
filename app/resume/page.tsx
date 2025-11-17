import Container from "@/components/Container";
import { DownloadResumeButton } from "@/components/DownloadResumeButton";
import { resumeTimeline } from "@/lib/content";

export default function ResumePage() {
  return (
    <Container className="space-y-8 py-24">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted">Resume</p>
        <h1 className="text-4xl font-semibold text-white">Experience</h1>
        <DownloadResumeButton />
      </header>
      <div className="space-y-4">
        {resumeTimeline.map((item) => (
          <article key={item.company} className="rounded-3xl border border-white/5 bg-surface/50 p-6">
            <h2 className="text-2xl font-semibold text-white">{item.company}</h2>
            <p className="text-sm text-muted">{item.role}</p>
            <p className="mt-2 text-sm text-muted">{item.timeframe}</p>
            <p className="mt-4 text-sm text-muted">{item.summary}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}

