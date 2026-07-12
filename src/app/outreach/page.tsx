import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Outreach",
  description:
    "The McGill PTP Lab's public-facing initiatives — blog, podcast, lexicon, and documentary project — bringing philosophical analysis to broad audiences.",
};

const initiatives = [
  {
    title: "The Normative Network",
    description:
      "The Normative Network is the Lab's blog, exploring the ethical and political dimensions of digital technologies. It features research insights, commentary, and analysis from Lab members and external contributors on topics across the Lab's research areas.",
    lead: "Radheesh Ameresekere",
    link: "https://substack.com/@thenormativenetwork",
    linkLabel: "Read on Substack",
  },
  {
    title: "A Philosophical Lexicon of Machine Learning",
    description:
      "The Philosophical Lexicon of Machine Learning is a glossary designed to make machine learning concepts accessible to humanities scholars. Each entry explains technical concepts — from neural networks to gradient descent — in clear language that bridges computer science and the humanities.",
    lead: "Asya Ciftci",
  },
  {
    title: "PTP Lab Podcast",
    description:
      "The PTP Lab Podcast features in-depth conversations with researchers and experts who contribute to The Normative Network blog. Each episode explores the ethics and politics of AI, social media, and other digital technologies.",
    lead: "Alex Carty",
    link: "https://www.youtube.com/@McGillPTPLab",
    linkLabel: "Watch on YouTube",
  },
  {
    title: "AI Myths and Misinformation Initiative",
    description:
      "The AI Myths and Misinformation Initiative brings together philosophers, cognitive scientists, social scientists, and computer scientists to examine popular misconceptions about AI using the toolkit of analytic epistemology. Findings are shared through public-facing materials, including an upcoming short documentary.",
    lead: "Maryna Nekrasova",
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
          <ScrollReveal>
            <p className="mb-12 max-w-3xl text-[17px] leading-relaxed text-text-secondary">
              Outreach is the public-facing arm of the Lab&apos;s engagement
              work — building awareness of the issues we study, and of
              philosophy&apos;s role in navigating them.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((item, i) => (
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
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-3 text-[14px] font-medium text-accent hover:underline"
                      >
                        {item.linkLabel}
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
