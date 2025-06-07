import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-900 py-16">
      <div className="mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-4xl font-bold text-gray-100 mb-6">About</h2>

        <p className="mt-4 text-lg text-gray-300">
          I’m a determined, caring, and motivated computer science student at UBC,
          with hands-on experience building full-stack applications in
          TypeScript, React, and Next.js, as well as machine-learning pipelines
          in Python. My drive comes from witnessing my family’s sacrifices—they
          immigrated from Sri Lanka to give me opportunities I could only dream
          of—and I’m committed to using my technical skills to create software
          that makes a positive impact in people’s lives.
        </p>

        <p className="mt-6 text-lg text-gray-300">
          Outside of coding, I prioritize physical and mental balance. You’ll
          often find me at the gym refining my discipline with strength
          training, or out on a PNW trail—hiking through forests and mountains
          to recharge and spark fresh ideas. My current focus is on pushing my
          limits in the gym and on the trail.
        </p>

        <p className="mt-6 text-lg text-gray-300">
          Education and community are at the heart of everything I do. Whether
          I’m debugging a tricky algorithm or planning a group workout, I bring
          dedication and empathy to help others and achieve meaningful results.
          My goal is to blend innovation with compassion to leave the world a
          little better than I found it.
        </p>

        <h3 className="mt-12 text-2xl font-semibold text-gray-100 mb-6">
          Hobbies &amp; Interests
        </h3>
      </div>

      <div className="px-4 mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
            <Image
              src="/Hiking.JPEG"
              alt="PNW Hiking"
              width={1600}
              height={900}
              className="object-cover w-full h-96"
            />
            <p className="px-4 py-2 text-center text-gray-400">Hiking</p>
          </div>

          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
            <Image
              src="/Soccer.JPEG"
              alt="Soccer"
              width={1600}
              height={900}
              className="object-cover w-full h-96"
            />
            <p className="px-4 py-2 text-center text-gray-400">Soccer</p>
          </div>
        </div>
      </div>
    </section>
  );
}







