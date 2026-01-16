import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaHeart, FaBrain, FaRocket, FaGraduationCap, FaUsers, FaMountain, FaFutbol } from 'react-icons/fa';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -20% 0px' }
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
      className="min-h-screen py-20 sm:py-32 opacity-0"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
        <div className="space-y-12 sm:space-y-16">
          <div className="space-y-6 sm:space-y-8">
            <div className="text-sm text-muted-foreground font-mono tracking-wider">ABOUT</div>
            <h2 className="text-3xl sm:text-4xl font-light">About Me</h2>
          </div>

          <div className="space-y-12">
            {/* Profile and Bio Section */}
            <div className="max-w-[700px] mx-auto lg:mx-0 space-y-6">
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-border">
                  <Image
                    src="/Graduation.JPEG"
                    alt="Kehan Hettiarachchi"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {traits.map(({ icon: Icon, text }, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300 flex items-center gap-2"
                  >
                    <Icon className="text-xs" />
                    {text}
                  </span>
                ))}
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m a determined, caring, and motivated computer science student at UBC,
                  with hands-on experience building full-stack applications in
                  TypeScript, React, and Next.js, as well as machine-learning pipelines
                  in Python. My drive comes from witnessing my family&apos;s sacrifices, they
                  immigrated from Sri Lanka to give me opportunities I could only dream
                  of, and I&apos;m committed to using my technical skills to create software
                  that makes a positive impact in people&apos;s lives.
                </p>

                <p>
                  Outside of coding, I prioritize physical and mental balance. You&apos;ll
                  often find me at the gym refining my discipline with strength
                  training, or out on a PNW trail, hiking through forests and mountains
                  to recharge and spark fresh ideas. My current focus is on pushing my
                  limits in the gym and on the trail.
                </p>

                <p>
                  Education and community are at the heart of everything I do. Whether
                  I&apos;m debugging a tricky algorithm or planning a group workout, I bring
                  dedication and empathy to help others and achieve meaningful results.
                  My goal is to blend innovation with compassion to leave the world a
                  little better than I found it.
                </p>
              </div>
            </div>

            {/* Hobbies Horizontal Strip */}
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground font-mono">HOBBIES & INTERESTS</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {hobbies.map((hobby, idx) => {
                  const Icon = hobby.icon;
                  return (
                    <div
                      key={idx}
                      className="group relative border border-border rounded-lg overflow-hidden hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                    >
                      <div className="relative h-40 sm:h-48 overflow-hidden">
                        <Image
                          src={hobby.image}
                          alt={hobby.title}
                          width={400}
                          height={300}
                          className={`object-cover w-full h-full transition-transform duration-300 group-hover:scale-110 ${
                            hobby.title === 'Education' ? 'object-[center_top] scale-90' : ''
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 justify-center">
                          <Icon className="text-sm text-muted-foreground group-hover:text-foreground transition-colors" />
                          <p className="text-sm font-medium">{hobby.title}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
