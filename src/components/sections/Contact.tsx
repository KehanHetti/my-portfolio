import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PROFILE } from "@/data/profile";
import { useContactInfo } from "@/hooks/useContactInfo";
import { Eyebrow, Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { EmailOptions } from "@/components/contact/EmailOptions";

const SOCIALS = [
  { name: "GitHub", icon: FaGithub, ...PROFILE.github },
  { name: "LinkedIn", icon: FaLinkedin, ...PROFILE.linkedin },
];

export default function Contact() {
  const contact = useContactInfo();

  return (
    <Section id="contact" label="Contact" title="Let's connect">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-10">
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            I&apos;m open to software engineering internships and new-grad
            roles. Whether you have an opportunity, a project, or just want to
            talk tech, I&apos;d love to hear from you.
          </p>

          {/* Filled in client-side so scrapers never see it in the HTML */}
          <div className="min-h-24 space-y-6">
            {contact && (
              <>
                <EmailOptions email={contact.email} />
                <a
                  href={contact.phoneHref}
                  className="block text-base text-foreground transition-colors hover:text-muted-foreground sm:text-lg"
                >
                  {contact.phone}
                </a>
              </>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {SOCIALS.map(({ name, icon: Icon, url, handle }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-lg border border-border p-4 transition-colors hover:border-muted-foreground/50"
              >
                <Icon className="text-xl text-muted-foreground transition-colors group-hover:text-foreground" />
                <div>
                  <div className="text-sm font-medium">{name}</div>
                  <div className="text-sm text-muted-foreground">{handle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Eyebrow>Send a message</Eyebrow>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
