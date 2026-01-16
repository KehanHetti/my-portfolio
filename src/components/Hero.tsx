// components/Hero.tsx

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowDown } from 'react-icons/fa';

type HeroProps = {
  scrollTo: (id: string) => void;
};

export default function Hero({ scrollTo }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* 1) Semi-transparent overlay covering entire hero */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* 2) Centered content (heading, subtitle, contact, icons) */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-100 drop-shadow-lg">
          Kehan Hettiarachchi
        </h1>
        <p className="mt-3 text-xl md:text-2xl text-gray-200">
          Computer Science Student &middot; Web Developer &middot; Game Developer
        </p>

        {/* Contact line */}
        <p className="mt-2 text-sm text-slate-300 flex flex-wrap justify-center items-center gap-x-2">
          <span>Surrey, BC</span>
          <span className="text-amber-500">|</span>
          <a
            href="mailto:kehanhetti@gmail.com"
            className="hover:underline hover:text-amber-500 text-slate-300 transition-colors"
          >
            kehanhetti@gmail.com
          </a>
          <span className="text-amber-500">|</span>
          <a
            href="tel:+16047272452"
            className="hover:underline hover:text-amber-500 text-slate-300 transition-colors"
          >
            604-727-2452
          </a>
        </p>

        {/* Social icons */}
        <div className="mt-6 flex space-x-4">
          <a
            href="https://github.com/KehanHetti"
            className="rounded-full bg-slate-800/60 backdrop-blur-sm p-3 hover:bg-amber-500/20 border border-slate-600/50 hover:border-amber-500/50 transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub className="text-lg text-white hover:text-amber-500 transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/kehan-hettiarachchi"
            className="rounded-full bg-slate-800/60 backdrop-blur-sm p-3 hover:bg-amber-500/20 border border-slate-600/50 hover:border-amber-500/50 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-lg text-white hover:text-amber-500 transition-colors" />
          </a>
          <a
            href="mailto:kehanhetti@gmail.com"
            className="rounded-full bg-slate-800/60 backdrop-blur-sm p-3 hover:bg-amber-500/20 border border-slate-600/50 hover:border-amber-500/50 transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <FaEnvelope className="text-lg text-white hover:text-amber-500 transition-colors" />
          </a>
          <a
            href="tel:+16047272452"
            className="rounded-full bg-slate-800/60 backdrop-blur-sm p-3 hover:bg-amber-500/20 border border-slate-600/50 hover:border-amber-500/50 transition-all duration-300 hover:scale-110"
            aria-label="Phone"
          >
            <FaPhone className="text-lg text-white hover:text-amber-500 transition-colors" />
          </a>
        </div>
      </div>

      {/* 3) Down-arrow button at the very bottom */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 transform">
        <button
          onClick={() => scrollTo('about')}
          className="rounded-full bg-slate-800/60 backdrop-blur-sm p-3 hover:bg-amber-500/20 border border-slate-600/50 hover:border-amber-500/50 transition-all duration-300 hover:scale-110"
          aria-label="Scroll down"
        >
          <FaArrowDown className="text-amber-500 text-2xl animate-bounce" />
        </button>
      </div>
    </section>
  );
}
