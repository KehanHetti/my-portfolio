import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen flex items-center justify-center bg-gray-800"
    >
      <div className="p-8 text-center">
        <h2 className="text-4xl font-bold text-gray-100 mb-4">Contact</h2>
        <div className="flex justify-center space-x-6 text-2xl mt-4 text-gray-300">
          <a href="mailto:kehanhetti@gmail.com" className="hover:text-indigo-400">
            <FaEnvelope />
          </a>
          <a href="tel:+16047272452" className="hover:text-indigo-400">
            <FaPhone />
          </a>
          <a href="https://github.com/KehanHetti" className="hover:text-indigo-400">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/kehan-hettiarachchi" className="hover:text-indigo-400">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

