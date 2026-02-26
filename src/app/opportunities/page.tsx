import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Opportunities",
  description:
    "Fellowship and collaboration opportunities at the McGill PTP Lab — graduate and undergraduate positions in technology ethics and policy research.",
};

export default function OpportunitiesPage() {
  return (
    <>
      <PageHero
        title="Opportunities"
        subtitle="Join us in shaping the normative landscape of transformative technologies."
      />

      <section className="px-6 pb-24 md:pb-32">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="font-serif text-[36px] md:text-[44px] leading-tight">
                Fellowships
              </h2>
              <div className="mt-6 space-y-6 text-[17px] leading-relaxed text-text-secondary">
                <p>
                  The Lab selects four philosophy graduate fellows and four
                  undergraduate fellows annually to participate in our research
                  initiatives and collaborative projects. The next fellowship
                  round will be advertised in August 2026.
                </p>
                <p>
                  In the meantime, we welcome engagement from students and faculty who are interested in
                  participating in our events, exploring research collaborations,
                  or partnering with the lab. Please reach out to discuss how you
                  might get involved.
                </p>
              </div>
              <a
                href="mailto:mcgillptp@gmail.com"
                className="inline-flex items-center gap-2 mt-8 bg-accent text-white px-6 py-3 text-[15px] font-medium rounded-sm hover:bg-accent/90 transition-colors"
              >
                Contact us
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
