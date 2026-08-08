import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Outreach",
  description:
    "The McGill PTP Lab's public-facing initiatives — podcast and mini-courses — bringing philosophical analysis to broad audiences.",
};

const initiatives = [
  {
    title: "PTP Lab Podcast",
    description:
      "The PTP Lab Podcast features conversations with scholars and experts working in the Lab's research areas. Each episode explores the ethics and politics of AI, social media, and other digital technologies.",
    lead: "Alex Carty",
    link: "https://www.youtube.com/@McGillPTPLab",
    linkLabel: "Watch on YouTube",
  },
  {
    title: "Mini-Courses",
    description:
      "The Lab's mini-courses give the public a working understanding of an issue in the ethics and politics of digital technologies. Each consists of three talks from researchers over three consecutive weeks, moving from the foundations of a topic to the questions still under debate.",
    lead: "Ian Gold",
    link: "/events",
    linkLabel: "See Events for details",
  },
];

export default function OutreachPage() {
  return (
    <>
      <PageHero
        title="Outreach"
        subtitle="Bringing philosophical analysis to broad audiences."
      />

      <section className="px-6 pb-24 md:pb-32">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((item, i) => {
              const linkClass =
                "inline-flex items-center gap-1 mt-3 text-[14px] font-medium text-accent hover:underline";
              const isInternal = item.link?.startsWith("/");

              return (
                <ScrollReveal key={item.title} delay={i * 0.08}>
                  <div className="p-8 border border-border rounded-sm h-full flex flex-col hover:-translate-y-[3px] hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-4 text-[15px] text-text-secondary leading-relaxed flex-1">
                      {item.description}
                    </p>
                    <div className="mt-6 pt-4 border-t border-border">
                      <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-text-secondary">
                        Team Lead: {item.lead}
                      </p>
                      {item.link &&
                        (isInternal ? (
                          <Link href={item.link} className={linkClass}>
                            {item.linkLabel}
                            <span aria-hidden="true">&rarr;</span>
                          </Link>
                        ) : (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linkClass}
                          >
                            {item.linkLabel}
                            <span aria-hidden="true">&rarr;</span>
                          </a>
                        ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
