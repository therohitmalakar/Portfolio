import Container from "@/components/Container";
import { heroContent } from "@/lib/content";

export default function AboutPage() {
  return (
    <Container className="space-y-6 py-24">
      <header>
        <p className="text-sm font-semibold uppercase tracking-wide text-muted">About</p>
        <h1 className="text-4xl font-semibold text-white">Background</h1>
      </header>
      <p className="text-lg text-muted">{heroContent.bio}</p>
    </Container>
  );
}

