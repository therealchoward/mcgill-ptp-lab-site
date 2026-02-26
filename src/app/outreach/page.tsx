import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Outreach",
  description:
    "The McGill PTP Lab's public-facing initiatives — blog, podcast, glossary, and workshops bringing philosophical analysis to broader audiences.",
};

const initiatives = [
  {
    title: "The Normative Network",
    description:
      "The Normative Network is the Lab's blog, exploring questions at the intersection of ethics, tech, and policy. It features research insights, commentary, and analysis from lab members and external researchers on topics across all of the Lab's research pillars.",
    lead: "Radheesh Ameresekere",
    link: "https://substack.com/@thenormativenetwork",
    linkLabel: "Read on Substack",
  },
  {
    title: "A Philosophical Lexicon of Machine Learning",
    description:
      "The Philosophical Lexicon of Machine Learning is a glossary designed to make machine learning concepts accessible to humanities scholars and ethicists. Each entry explains technical terms — from neural networks to gradient descent — in clear language that bridges CS and humanities disciplines.",
    lead: "Asya Ciftci",
  },
  {
    title: "PTP Lab Podcast",
    description:
      "The PTP Lab Podcast features in-depth conversations with researchers and experts who contribute to The Normative Network blog. Each episode explores cutting-edge thinking about platform governance, AI ethics, data policy, and other urgent questions where philosophy, tech, and policy converge.",
    lead: "Alexander Carty",
  },
  {
    title: "AI Myths and Misinformation Workshops",
    description:
      "The AI Myths and Misinformation Workshops bring together philosophers, cognitive scientists, social scientists, and computer scientists to examine popular misconceptions about artificial intelligence using the toolkit of analytic epistemology. Findings are disseminated widely to public audiences.",
    lead: "Maryna Nekrasova",
  },
];

export default function OutreachPage() {
  return (
    <>
      <PageHero
        title="Outreach"
        subtitle="We bring rigorous philosophical analysis to broader audiences through blogs, podcasts, workshops, and public engagement."
      />

      <section className="px-6 pb-24 md:pb-32">
        <div className="max-w-[1200px] mx-auto">
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
