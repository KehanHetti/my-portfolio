import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaHeart, FaBrain, FaRocket, FaGraduationCap, FaUsers, FaMountain, FaFutbol } from 'react-icons/fa';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const traits = [
    { icon: FaHeart, text: 'Caring' },
    { icon: FaBrain, text: 'Determined' },
    { icon: FaRocket, text: 'Motivated' },
  ];

  const hobbies = [
    { image: '/Hiking.JPEG', title: 'Hiking', icon: FaMountain },
    { image: '/Soccer.JPEG', title: 'Soccer', icon: FaFutbol },
    { image: '/Graduation.JPEG', title: 'Education', icon: FaGraduationCap },
    { image: '/Hackathons.JPEG', title: 'Hackathons', icon: FaUsers },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="bg-slate-800/50 py-12 md:py-16 relative flex flex-col"
    >
      <div className="mx-auto px-4 md:px-8 lg:px-12 max-w-7xl flex flex-col">
        {/* Hero Section with Headshot */}
        <div className={`text-center mb-6 flex-shrink-0 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="inline-block mb-3">
            <div className="relative w-20 h-20 md:w-28 md:h-28 mx-auto rounded-full overflow-hidden border-3 border-amber-500/50 shadow-xl">
              <Image
                src="/Graduation.JPEG"
                alt="Kehan Hettiarachchi"
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">About Me</h2>
          <div className="flex justify-center items-center gap-2 mt-3">
            {traits.map(({ icon: Icon, text }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-700/50 border border-slate-600"
              >
                <Icon className="text-amber-500 text-xs" />
                <span className="text-slate-300 text-xs font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Glass-morphism Bio Card */}
        <div className={`max-w-6xl mx-auto mb-4 flex-1 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 shadow-xl">
            <p className="text-xs text-slate-300 leading-relaxed mb-2.5">
              I&apos;m a determined, caring, and motivated computer science student at UBC,
              with hands-on experience building full-stack applications in
              TypeScript, React, and Next.js, as well as machine-learning pipelines
              in Python. My drive comes from witnessing my family&apos;s sacrifices—they
              immigrated from Sri Lanka to give me opportunities I could only dream
              of—and I&apos;m committed to using my technical skills to create software
              that makes a positive impact in people&apos;s lives.
            </p>

            <p className="text-xs text-slate-300 leading-relaxed mb-2.5">
              Outside of coding, I prioritize physical and mental balance. You&apos;ll
              often find me at the gym refining my discipline with strength
              training, or out on a PNW trail—hiking through forests and mountains
              to recharge and spark fresh ideas. My current focus is on pushing my
              limits in the gym and on the trail.
            </p>

            <p className="text-xs text-slate-300 leading-relaxed">
              Education and community are at the heart of everything I do. Whether
              I&apos;m debugging a tricky algorithm or planning a group workout, I bring
              dedication and empathy to help others and achieve meaningful results.
              My goal is to blend innovation with compassion to leave the world a
              little better than I found it.
            </p>
          </div>
        </div>

        {/* Hobbies Section */}
        <div className={`flex-shrink-0 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
            Hobbies &amp; Interests
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {hobbies.map((hobby, idx) => (
              <div
                key={idx}
                className="group relative bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden shadow-lg hover:border-amber-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-32 md:h-40 overflow-hidden">
                  <Image
                    src={hobby.image}
                    alt={hobby.title}
                    width={800}
                    height={400}
                    className={`object-cover w-full h-full transition-transform duration-300 group-hover:scale-110 ${
                      hobby.title === 'Education' ? 'object-[center_top] scale-90' : ''
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-2">
                  <div className="flex items-center gap-1.5 justify-center">
                    <hobby.icon className="text-amber-500 text-xs" />
                    <p className="text-slate-300 text-xs font-semibold">{hobby.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
