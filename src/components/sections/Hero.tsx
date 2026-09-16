import React from "react";
// FaEnvelope stays out until the contact section is re-enabled.
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PROFILE } from "@/data/profile";

const iconLink =
  "rounded-full border border-white/20 bg-white/5 p-3 text-white backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-white/10";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-background" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-5 font-mono text-xs tracking-[0.3em] text-neutral-300 uppercase">
          {PROFILE.location}
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-white drop-shadow-lg sm:text-6xl md:text-7xl">
          {PROFILE.name}
        </h1>
        <p className="mt-5 max-w-xl text-lg font-light text-neutral-200 sm:text-xl">
          {PROFILE.tagline}
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#projects"
            className="w-44 rounded-lg bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
          >
            View my work
          </a>
          <a
            href={PROFILE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-44 rounded-lg border border-white/30 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-white/10"
          >
            Resume
          </a>
        </div>

        <div className="mt-8 flex gap-4">
          <a href={PROFILE.github.url} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="GitHub">
            <FaGithub className="text-lg" />
          </a>
          <a href={PROFILE.linkedin.url} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="LinkedIn">
            <FaLinkedin className="text-lg" />
          </a>
          {/* Temporarily hidden along with the contact section.
          <a href="#contact" className={iconLink} aria-label="Contact me">
            <FaEnvelope className="text-lg" />
          </a> */}
        </div>
      </div>
    </section>
  );
}
