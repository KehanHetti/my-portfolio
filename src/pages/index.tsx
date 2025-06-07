// pages/index.tsx
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import type { GetStaticProps } from 'next';

import Nav from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
import Courses from '../components/Courses';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

interface Project {
  id: number;
  title: string;
  summary: string;
}

interface HomeProps {
  projects: Project[];
}

const SECTIONS = [
  { id: 'hero',       label: 'Home'     },
  { id: 'about',      label: 'About'    },
  { id: 'resume',     label: 'Resume'   },
  { id: 'projects',   label: 'Projects' },
  { id: 'activities', label: 'Courses'  },
  { id: 'statistics', label: 'Skills'   },
  { id: 'contact',    label: 'Contact'  },
];

export default function Home({ projects }: HomeProps) {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const mainRef = useRef<HTMLElement>(null);

  // Highlight nav links on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    SECTIONS.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll helper
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // One‐notch‐per‐section wheel handler
  useEffect(() => {
    const node = mainRef.current;
    if (!node) return;

    let isThrottled = false;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isThrottled) return;

      const dir = e.deltaY > 0 ? 1 : -1;
      const idx = SECTIONS.findIndex((s) => s.id === activeSection);
      let next = idx + dir;
      next = Math.max(0, Math.min(SECTIONS.length - 1, next));

      if (next !== idx) {
        scrollTo(SECTIONS[next].id);
        isThrottled = true;
        setTimeout(() => {
          isThrottled = false;
        }, 700);
      }
    };

    node.addEventListener('wheel', onWheel as any, { passive: false });
    return () => {
      node.removeEventListener('wheel', onWheel as any);
    };
  }, [activeSection]);

  return (
    <>
      <Head>
        <title>Kehan Hettiarachchi | Portfolio</title>
      </Head>

      <style jsx global>{`
        html,
        body {
          scroll-behavior: smooth;
          margin: 0;
          padding: 0;
        }
        main {
          scroll-snap-type: y mandatory;
        }
        section {
          scroll-snap-align: start;
        }
      `}</style>

      <Nav
        sections={SECTIONS}
        activeSection={activeSection}
        scrollTo={scrollTo}
      />

      <main
        ref={mainRef}
        className="overflow-hidden h-screen"
      >
        <Hero scrollTo={scrollTo} />
        <About />
        <Resume />
        <Projects projects={projects} />
        <Courses />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Counter Strike 2 Damage Detection System',
      summary:
        'Engineered a deep learning model achieving 90%+ accuracy in real-time detection and classification of 6 in-game events; Automated data pipeline to process 3+ hours of gameplay footage, improving generalization by 35%; Coordinated a 3-person development team delivering production-ready system in 4 months.',
    },
    {
      id: 2,
      title: 'Navis – AI-Powered Voice Navigation Tool',
      summary:
        'Developed a voice navigation tool supporting 15+ commands with 95% recognition accuracy; Implemented accessibility features compatible with major screen readers; Reduced navigation time by 60% compared to mouse-based browsing.',
    },
  ];

  return { props: { projects } };
};
