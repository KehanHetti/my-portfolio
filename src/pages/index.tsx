import Seo from "@/components/layout/Seo";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Coursework from "@/components/sections/Coursework";
// Temporarily disabled: contact section is hidden from the live site.
// import Contact from "@/components/sections/Contact";
import { NAV_ITEMS } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";

const SECTION_IDS = ["hero", ...NAV_ITEMS.map((item) => item.id)];

export default function Home() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <>
      <Seo />
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <Nav items={NAV_ITEMS} activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Coursework />
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
}
