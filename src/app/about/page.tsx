import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the McGill PTP Lab — our mission, our approach, and why philosophy-informed technology policy matters now more than ever.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About"
        subtitle="Understanding the McGill Philosophy, Technology & Policy Lab"
      />

      <section className="px-6 pb-24 md:pb-32">
        <div className="max-w-[1200px] mx-auto">
          {/* Mission */}
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="font-serif text-[36px] md:text-[44px] leading-tight">
                Our Mission
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-text-secondary">
                The McGill PTP Lab brings the tools of philosophy to bear on
                pressing questions in technology ethics and policy. We
                investigate the interconnections between AI, social media, gaming
                platforms, and other emerging technologies, examining how they
                collectively shape human experience. Our mission is to articulate
                and help realize the good digital life and just digital society.
              </p>
            </div>
          </ScrollReveal>

          <div className="my-16 h-px bg-border" />

          {/* Why This Work Matters */}
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="font-serif text-[36px] md:text-[44px] leading-tight">
                Why This Work Matters
              </h2>
              <div className="mt-6 space-y-6 text-[17px] leading-relaxed text-text-secondary">
                <p>
                  We are living through the most consequential period of
                  technological development in human history. Artificial
                  intelligence systems are being deployed across healthcare,
                  criminal justice, education, and democratic governance — often
                  without adequate ethical scrutiny or meaningful public
                  deliberation. Social media platforms shape the information
                  environment for billions, with profound effects on mental
                  health, political discourse, and social cohesion. The decisions
                  being made now about how these technologies are designed,
                  regulated, and governed will define the conditions of human
                  life for generations.
                </p>
                <p>
                  Yet these decisions are overwhelmingly driven by technical and
                  commercial considerations, with philosophical and ethical
                  analysis too often arriving after the fact — if at all. The
                  result is a widening gap between the pace of technological
                  change and our collective capacity to govern it wisely. Closing
                  this gap requires sustained, rigorous engagement from
                  philosophers, ethicists, and humanists who can articulate the
                  values at stake and develop normative frameworks adequate to
                  the challenge.
                </p>
                <p>
                  The McGill PTP Lab exists to fill this need. We bring the
                  depth, precision, and critical rigor of philosophical inquiry
                  to questions that are too often addressed superficially or
                  abandoned to purely technical solution-making. Our work is
                  driven by the conviction that good technology policy requires
                  good philosophy — and that the stakes of getting it wrong have
                  never been higher.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="my-16 h-px bg-border" />

          {/* What We Do */}
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="font-serif text-[36px] md:text-[44px] leading-tight">
                What We Do
              </h2>
              <div className="mt-6 space-y-6 text-[17px] leading-relaxed text-text-secondary">
                <p>
                  The Lab pursues its mission through four interconnected
                  activities:
                </p>
                <ul className="space-y-4 list-none">
                  <li className="pl-6 border-l-2 border-accent">
                    <strong className="text-foreground">
                      Interdisciplinary research
                    </strong>{" "}
                    — Original scholarship addressing platform ethics, data
                    ethics, AI governance, and the mental health impacts of
                    digital technologies, published in leading philosophy and
                    interdisciplinary journals.
                  </li>
                  <li className="pl-6 border-l-2 border-accent">
                    <strong className="text-foreground">
                      Student training
                    </strong>{" "}
                    — Graduate and undergraduate fellowships that develop the
                    next generation of scholars and practitioners working at the
                    intersection of philosophy, technology, and policy.
                  </li>
                  <li className="pl-6 border-l-2 border-accent">
                    <strong className="text-foreground">
                      Public outreach
                    </strong>{" "}
                    — A blog (The Normative Network), podcast, and workshops that
                    bring rigorous philosophical analysis to broader audiences
                    and contribute to informed public discourse.
                  </li>
                  <li className="pl-6 border-l-2 border-accent">
                    <strong className="text-foreground">
                      Policy engagement
                    </strong>{" "}
                    — Direct engagement with policymakers, technologists, and
                    civil society organizations to ensure that governance
                    frameworks for emerging technologies are grounded in sound
                    ethical reasoning.
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <div className="my-16 h-px bg-border" />

          {/* McGill affiliation */}
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-[15px] text-text-secondary">
                The McGill PTP Lab is based in the Department of Philosophy at{" "}
                <a
                  href="https://www.mcgill.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  McGill University
                </a>
                , Montreal, Canada.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
