import React from "react";
import Image from "next/image";
import { FaGraduationCap, FaUsers, FaMountain, FaFutbol } from "react-icons/fa";
import { Eyebrow, Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

// Personal photos live in /public/photos, which is excluded from image search
// via robots.txt (Googlebot-Image) and X-Robots-Tag headers (next.config.ts).
// Alt text stays generic on purpose: naming the person in alt text is one of
// the strongest signals image search uses to match a photo to a name.
const PHOTOS = [
  { src: "/photos/hiking.jpg", title: "Hiking", icon: FaMountain, top: false },
  { src: "/photos/soccer.jpg", title: "Soccer", icon: FaFutbol, top: false },
  { src: "/photos/graduation.jpg", title: "Education", icon: FaGraduationCap, top: true },
  { src: "/photos/hackathons.jpg", title: "Hackathons", icon: FaUsers, top: false },
];

// Discourages casual "save image as" / drag-to-desktop on personal photos.
const protectImage = {
  draggable: false,
  onContextMenu: (e: React.MouseEvent) => e.preventDefault(),
};

export default function About() {
  return (
    <Section id="about" label="About" title="About me">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="flex justify-center lg:col-span-3 lg:block">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border border-border lg:h-44 lg:w-44">
            <Image
              src="/photos/graduation.jpg"
              alt="Profile photo"
              fill
              sizes="176px"
              className="select-none object-cover object-top"
              {...protectImage}
            />
          </div>
        </div>

        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg lg:col-span-9">
          <p>
            I&apos;m a computer science student at UBC with hands-on experience
            building full-stack applications in TypeScript, React, and Next.js,
            as well as machine-learning pipelines in Python. My drive comes from
            my family, who immigrated from Sri Lanka to give me opportunities I
            could only dream of, and I&apos;m committed to building software
            that makes a real difference in people&apos;s lives.
          </p>
          <p>
            Outside of coding, you&apos;ll usually find me working out at the
            gym, travelling somewhere new, gaming, listening to music, or
            watching sports. They keep me balanced and are often where my best
            ideas come from.
          </p>
          <p>
            Whether I&apos;m debugging a tricky algorithm or organizing a team
            project, I bring dedication and empathy, and I aim to leave every
            team a little better than I found it.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <Eyebrow>Outside of work</Eyebrow>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {PHOTOS.map(({ src, title, icon: Icon, top }) => (
            <figure
              key={title}
              className="group overflow-hidden rounded-lg border border-border transition-colors hover:border-muted-foreground/50"
            >
              <div className="relative h-40 overflow-hidden sm:h-56">
                <Image
                  src={src}
                  alt={title}
                  fill
                  sizes="(min-width: 1024px) 280px, 50vw"
                  className={cn(
                    "select-none object-cover transition-transform duration-500 group-hover:scale-105",
                    top ? "object-top" : "object-center",
                  )}
                  {...protectImage}
                />
              </div>
              <figcaption className="flex items-center justify-center gap-2 p-3 text-sm">
                <Icon className="text-muted-foreground" aria-hidden />
                {title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}
