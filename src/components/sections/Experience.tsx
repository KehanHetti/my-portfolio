import React from "react";
import { FaDownload } from "react-icons/fa";
import { EDUCATION, EXPERIENCE } from "@/data/experience";
import { CONCEPTS, SKILL_GROUPS } from "@/data/skills";
import { PROFILE } from "@/data/profile";
import { buttonStyles, Eyebrow, Section, Tag } from "@/components/ui/Section";

function TimelineRow({ period, children }: { period: string; children: React.ReactNode }) {
  return (
    <article className="grid gap-3 border-b border-border/60 py-8 last:border-b-0 sm:grid-cols-12 sm:gap-8">
      <div className="pt-1 font-mono text-sm text-muted-foreground sm:col-span-3">{period}</div>
      <div className="space-y-3 sm:col-span-9">{children}</div>
    </article>
  );
}

export default function Experience() {
  return (
    <Section
      id="experience"
      label="Resume"
      title="Experience & education"
      action={
        <a
          href={PROFILE.resumeUrl}
          download={PROFILE.resumeFileName}
          className={`${buttonStyles.outline} self-start sm:self-auto`}
        >
          <FaDownload className="text-xs" aria-hidden />
          Download PDF
        </a>
      }
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-14 lg:col-span-8">
          <div className="space-y-2">
            <Eyebrow>Experience</Eyebrow>
            {EXPERIENCE.map((role) => (
              <TimelineRow key={role.company} period={role.period}>
                <div>
                  <h3 className="text-lg font-medium sm:text-xl">{role.title}</h3>
                  <div className="text-muted-foreground">
                    {role.company} · {role.location}
                  </div>
                </div>
                <ul className="list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted-foreground marker:text-border">
                  {role.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-1">
                  {role.stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </TimelineRow>
            ))}
          </div>

          <div className="space-y-2">
            <Eyebrow>Education</Eyebrow>
            <TimelineRow period={EDUCATION.period}>
              <div className="space-y-1">
                <h3 className="text-lg font-medium sm:text-xl">{EDUCATION.degree}</h3>
                <div className="text-muted-foreground">
                  {EDUCATION.school} · {EDUCATION.detail}
                </div>
                <p className="text-sm text-muted-foreground">{EDUCATION.note}</p>
              </div>
            </TimelineRow>
          </div>
        </div>

        <aside className="space-y-8 lg:col-span-4">
          <Eyebrow>Skills</Eyebrow>
          {SKILL_GROUPS.map(({ category, skills }) => (
            <div key={category} className="space-y-3">
              <h3 className="text-sm font-medium">{category}</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map(({ name, icon: Icon }) => (
                  <li
                    key={name}
                    className="inline-flex items-center gap-2 rounded-md border border-border px-2.5 py-1.5 text-sm text-muted-foreground"
                  >
                    <Icon className="text-xs" aria-hidden />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Concepts</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {CONCEPTS.join(" · ")}
            </p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
