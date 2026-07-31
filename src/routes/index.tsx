import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { AuroraBackground } from "@/components/site/AuroraBackground";
import { BackToTop, CursorGlow, Loader, ScrollProgress } from "@/components/site/Chrome";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Experience } from "@/components/site/Experience";
import { Education } from "@/components/site/Education";
import { Certificates } from "@/components/site/Certificates";
import { Projects } from "@/components/site/Projects";
import { Highlights } from "@/components/site/Highlights";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Sania — BCA Student & Cyber Security Enthusiast";
const description =
  "Portfolio of Sania, a BCA student and cyber security enthusiast in Panipat, India — skills, internships, certificates and learning projects.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AuroraBackground />
      <Loader />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster position="bottom-center" />
    </div>
  );
}
