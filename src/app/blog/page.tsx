import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "The Normative Network — the McGill PTP Lab's ideas forum featuring research insights, commentary, and analysis on technology ethics and policy.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" />

      <section className="px-6 pb-24 md:pb-32">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="max-w-2xl">
              <h2 className="font-serif text-[36px] md:text-[44px] leading-tight">
                The Normative Network
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-text-secondary">
                The Normative Network is the McGill PTP Lab&apos;s ideas forum —
                featuring research insights, commentary, and analysis from lab
                members and external contributors. It is published on Substack.
              </p>
              <a
                href="https://substack.com/@thenormativenetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 bg-accent text-white px-6 py-3 text-[15px] font-medium rounded-sm hover:bg-accent/90 transition-colors"
              >
                Read on Substack
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
