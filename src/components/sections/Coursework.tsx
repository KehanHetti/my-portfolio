import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { COURSE_GROUPS, IN_PROGRESS_COURSES, type CourseGroup } from "@/data/coursework";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

const PRIMARY = COURSE_GROUPS.filter((g) => g.primary);
const ELECTIVES = COURSE_GROUPS.filter((g) => !g.primary);
const ELECTIVE_COUNT = ELECTIVES.reduce((n, g) => n + g.courses.length, 0);

function Group({ group }: { group: CourseGroup }) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">{group.category}</h3>
      <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {group.courses.map((course) => (
          <li key={course.code} className="border-t border-border/60 py-4">
            <div className="font-mono text-xs text-muted-foreground">{course.code}</div>
            <div className="mt-1 text-sm font-medium">{course.name}</div>
            <p className="mt-1 text-sm leading-snug text-muted-foreground">{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Coursework() {
  const [showElectives, setShowElectives] = useState(false);

  return (
    <Section
      id="coursework"
      label="Coursework"
      title="Academic background"
      description="Completed coursework toward my B.Sc. in Computer Science at UBC."
    >
      <div className="space-y-12">
        <div className="space-y-4">
          <h3 className="text-sm font-medium">In progress</h3>
          <ul className="flex flex-wrap gap-2">
            {IN_PROGRESS_COURSES.map((code) => (
              <li
                key={code}
                className="rounded-full border border-border/60 px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {code}
              </li>
            ))}
          </ul>
        </div>

        {PRIMARY.map((group) => (
          <Group key={group.category} group={group} />
        ))}

        <div id="electives" hidden={!showElectives} className="space-y-12">
          {ELECTIVES.map((group) => (
            <Group key={group.category} group={group} />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setShowElectives((v) => !v)}
          aria-expanded={showElectives}
          aria-controls="electives"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {showElectives ? "Hide electives" : `Show ${ELECTIVE_COUNT} electives`}
          <FaChevronDown
            className={cn("text-xs transition-transform", showElectives && "rotate-180")}
            aria-hidden
          />
        </button>
      </div>
    </Section>
  );
}
