import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:kehanhetti@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 sm:py-32 opacity-0 relative"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono tracking-wider">CONTACT</div>
              <h2 className="text-3xl sm:text-4xl font-light">Let&apos;s Connect</h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Always interested in new opportunities, collaborations, and conversations about technology and design.
              </p>

              <div className="space-y-4">
                <Link
                  href="mailto:kehanhetti@gmail.com"
                  className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  <span className="text-base sm:text-lg">kehanhetti@gmail.com</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="tel:+16047272452"
                  className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  <span className="text-base sm:text-lg">604-727-2452</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: 'GitHub', handle: '@KehanHetti', url: 'https://github.com/KehanHetti' },
                { name: 'LinkedIn', handle: 'kehan-hettiarachchi', url: 'https://linkedin.com/in/kehan-hettiarachchi' },
              ].map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                      {social.name}
                    </div>
                    <div className="text-sm text-muted-foreground">{social.handle}</div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="space-y-4">
              <div className="text-sm text-muted-foreground font-mono">SEND A MESSAGE</div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-muted-foreground/50 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-muted-foreground/50 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Message"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-muted-foreground/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Skyline Silhouette at Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none opacity-[0.05]">
        <svg
          viewBox="0 0 1200 200"
          className="w-full h-full"
          preserveAspectRatio="none"
          style={{ filter: 'grayscale(100%)' }}
        >
          {/* Skyline silhouette */}
          <path
            d="M0,200 L0,120 L50,120 L50,80 L100,80 L100,140 L150,140 L150,100 L200,100 L200,160 L250,160 L250,120 L300,120 L300,180 L350,180 L350,140 L400,140 L400,100 L450,100 L450,160 L500,160 L500,120 L550,120 L550,80 L600,80 L600,140 L650,140 L650,100 L700,100 L700,160 L750,160 L750,120 L800,120 L800,180 L850,180 L850,140 L900,140 L900,100 L950,100 L950,160 L1000,160 L1000,120 L1050,120 L1050,80 L1100,80 L1100,140 L1150,140 L1150,100 L1200,100 L1200,200 Z"
            fill="currentColor"
            className="text-foreground"
          />
        </svg>
      </div>
    </section>
  );
}
