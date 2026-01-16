import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (you can integrate with a service like Formspree, EmailJS, etc.)
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
      className="bg-slate-800/50 py-24 md:py-32 relative flex flex-col overflow-y-auto"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 flex-1 flex flex-col min-h-0">
        <div className={`text-center mb-12 flex-shrink-0 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let&apos;s Connect</h2>
          <p className="text-slate-300 text-lg leading-relaxed">Get in touch with me</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1 min-h-0 mb-12">
          {/* Contact Information */}
          <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'} flex flex-col`} style={{ animationDelay: '0.2s' }}>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 flex-1 flex flex-col min-h-0">
              <h3 className="text-xl font-bold text-white mb-6 flex-shrink-0">Contact Information</h3>
              
              <div className="space-y-4 flex-1 min-h-0">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-amber-500/20 border border-amber-500/50 flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-amber-500 text-lg" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-400 text-sm mb-1">Email</p>
                    <a
                      href="mailto:kehanhetti@gmail.com"
                      className="text-white text-base hover:text-amber-500 transition-colors break-all"
                    >
                      kehanhetti@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-amber-500/20 border border-amber-500/50 flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-amber-500 text-lg" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Phone</p>
                    <a
                      href="tel:+16047272452"
                      className="text-white text-base hover:text-amber-500 transition-colors"
                    >
                      604-727-2452
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-amber-500/20 border border-amber-500/50 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-amber-500 text-lg" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Location</p>
                    <p className="text-white text-base">Surrey, BC, Canada</p>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="mt-8 flex-shrink-0">
                <h4 className="text-lg font-semibold text-white mb-4">Connect with me</h4>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/KehanHetti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-slate-700/50 border border-slate-600 flex items-center justify-center text-xl text-slate-300 hover:bg-amber-500 hover:text-white hover:border-amber-500 hover:scale-110 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://linkedin.com/in/kehan-hettiarachchi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-slate-700/50 border border-slate-600 flex items-center justify-center text-xl text-slate-300 hover:bg-amber-500 hover:text-white hover:border-amber-500 hover:scale-110 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="mailto:kehanhetti@gmail.com"
                    className="w-12 h-12 rounded-lg bg-slate-700/50 border border-slate-600 flex items-center justify-center text-xl text-slate-300 hover:bg-amber-500 hover:text-white hover:border-amber-500 hover:scale-110 transition-all duration-300"
                    aria-label="Email"
                  >
                    <FaEnvelope />
                  </a>
                  <a
                    href="tel:+16047272452"
                    className="w-12 h-12 rounded-lg bg-slate-700/50 border border-slate-600 flex items-center justify-center text-xl text-slate-300 hover:bg-amber-500 hover:text-white hover:border-amber-500 hover:scale-110 transition-all duration-300"
                    aria-label="Phone"
                  >
                    <FaPhone />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'} flex flex-col lg:col-span-2`} style={{ animationDelay: '0.3s' }}>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 flex-1 flex flex-col min-h-0">
              <h3 className="text-xl font-bold text-white mb-6 flex-shrink-0">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col min-h-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-shrink-0">
                  <div>
                    <label htmlFor="name" className="block text-slate-300 mb-2 text-sm">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white text-sm placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-slate-300 mb-2 text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white text-sm placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="flex-1 flex flex-col min-h-0">
                  <label htmlFor="message" className="block text-slate-300 mb-2 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white text-sm placeholder-slate-400 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex-shrink-0"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className={`text-center mt-8 pt-8 border-t border-slate-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <p className="text-slate-400 text-sm">
            © 2026 Kehan Hettiarachchi. Built with React & Tailwind CSS.
          </p>
        </footer>
      </div>
    </section>
  );
}
