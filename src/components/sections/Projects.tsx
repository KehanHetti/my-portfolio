import React from "react";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { PROJECTS } from "@/data/projects";
import { PROFILE } from "@/data/profile";
import { Section, Tag } from "@/components/ui/Section";

export default function Projects() {
  return (
    <Section
      id="projects"
      label="Projects"
      title="Selected work"
      action={
        <a
          href={PROFILE.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 self-start text-sm text-muted-foreground transition-colors hover:text-foreground sm:self-auto"
        >
          <FaGithub aria-hidden />
          More on GitHub
          <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" aria-hidden />
        </a>
      }
    >
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <article
            key={project.title}
            className="flex flex-col rounded-xl border border-border p-6 transition-colors hover:border-muted-foreground/50 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-sm text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex gap-3 text-muted-foreground">
                {project.links?.repo && (
                  <a href={project.links.repo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} source code`} className="hover:text-foreground">
                    <FaGithub />
                  </a>
                )}
                {project.links?.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`} className="hover:text-foreground">
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                )}
              </div>
            </div>
            <h3 className="mt-3 text-xl font-medium tracking-tight sm:text-2xl">{project.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{project.summary}</p>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted-foreground marker:text-border">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-2 pt-6">
              {project.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
