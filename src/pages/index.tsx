// pages/index.tsx
import { useState, useEffect, useRef, useCallback } from 'react';
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
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Slideshow behavior for hero section only
  useEffect(() => {
    const node = mainRef.current;
    if (!node) return;

    let isThrottled = false;

    const onWheel = (e: WheelEvent) => {
      const hero = document.getElementById('hero');
      if (!hero) return;

      const heroRect = hero.getBoundingClientRect();
      const isInHero = heroRect.top >= 0 && heroRect.bottom <= window.innerHeight;
      
      // Only apply slideshow behavior when in hero section
      if (isInHero && !isThrottled) {
        e.preventDefault();
        isThrottled = true;
        
        if (e.deltaY > 0) {
          // Scrolling down - go to About
          scrollTo('about');
        }
        
        setTimeout(() => {
          isThrottled = false;
        }, 800);
      }
    };

    node.addEventListener('wheel', onWheel as EventListener, { passive: false });
    return () => {
      node.removeEventListener('wheel', onWheel as EventListener);
    };
  }, [scrollTo]);

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
          overflow-y: auto;
          scroll-snap-type: y proximity;
        }
        #hero {
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }
        section {
          min-height: 100vh;
        }
      `}</style>

      <Nav
        sections={SECTIONS}
        activeSection={activeSection}
        scrollTo={scrollTo}
      />

      <main
        ref={mainRef}
        className="overflow-y-auto h-screen"
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
        'Built ML-powered system to detect in-game damage events in real time using Python, OpenCV, and TensorFlow. Achieved 90%+ classification accuracy and reduced overall event misclassification by 35% via preprocessing. Engineered automated data pipeline to preprocess raw gameplay footage, improving training efficiency by 40%. Led a 3-person cross-functional team using Agile methods to successfully deliver a production-ready MVP.',
    },
    {
      id: 2,
      title: 'Navis – AI-Powered Voice Navigation Tool',
      summary:
        'Developed AI-powered tool enabling hands-free navigation using Python, JavaScript, and speech recognition. Integrated advanced speech recognition engine achieving 95%+ command accuracy across major browsers. Reduced navigation by 60% compared to manual interaction through optimized voice command processing. Implemented essential WCAG-compliant features, supporting major screen readers and accessibility standards.',
    },
    {
      id: 3,
      title: 'Content Distributer',
      summary:
        'Developed a full-stack content distribution system enabling simultaneous uploads to Instagram, Reddit, YouTube, Pinterest, and LinkedIn using Next.js and Golang. Engineered concurrent upload workers with retry logic, validation, and dynamic forms for platform requirements. Instrumented metrics to monitor throughput and latency, improving efficiency by 40% under load.',
    },
  ];

  return { props: { projects } };
};
