"use client";

import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Replace YOUR_FORMSPREE_ENDPOINT with your Formspree endpoint
    // Create a form at formspree.io, copy the endpoint URL (e.g., https://formspree.io/f/xxxxx),
    // and paste it below.
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvzbdelq";

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // silently fail — user can use direct email
    }
  }

  return (
    <>
      <PageHero
        title="Support the Lab"
        subtitle="Help us shape the ethical landscape of transformative technologies"
      />

      <section className="px-6 pb-24 md:pb-32">
        <div className="max-w-[1200px] mx-auto">
          {/* Pitch */}
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="space-y-6 text-[17px] leading-relaxed text-text-secondary">
                <p>
                  The decisions being made today about AI, social media, and
                  other emerging technologies will define the conditions of human
                  life for generations. Yet those decisions are being made
                  largely without adequate philosophical and ethical foundations.
                  The Lab exists to change that, bringing the tools of philosophy
                  to bear on the most urgent ethical challenges of the digital
                  age.
                </p>
                <p>
                  Your support enables graduate and undergraduate fellowships,
                  workshops and conferences that convene leading researchers and
                  policymakers, public outreach initiatives that bring our work
                  to broader audiences, and cutting-edge research that gives
                  policymakers and designers the normative frameworks they need.
                </p>
                <p>
                  We welcome conversations with individuals and organizations
                  who share our commitment to a just and flourishing digital
                  society.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="my-16 h-px bg-border" />

          {/* Form */}
          <ScrollReveal>
            <div className="max-w-xl">
              <h2 className="font-serif text-[36px] leading-tight">
                Expression of Interest
              </h2>

              {submitted ? (
                <div className="mt-8 p-8 border border-accent/30 rounded-sm bg-accent/5">
                  <p className="text-[17px] font-medium text-accent">
                    Thank you for your interest.
                  </p>
                  <p className="mt-2 text-[15px] text-text-secondary">
                    We&apos;ll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[13px] font-medium uppercase tracking-[0.1em] text-text-secondary mb-2"
                    >
                      Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-border rounded-sm bg-transparent text-[15px] focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-[13px] font-medium uppercase tracking-[0.1em] text-text-secondary mb-2"
                    >
                      Organization / Institution
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      className="w-full px-4 py-3 border border-border rounded-sm bg-transparent text-[15px] focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[13px] font-medium uppercase tracking-[0.1em] text-text-secondary mb-2"
                    >
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-border rounded-sm bg-transparent text-[15px] focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[13px] font-medium uppercase tracking-[0.1em] text-text-secondary mb-2"
                    >
                      How you&apos;d like to get involved
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-sm bg-transparent text-[15px] focus:outline-none focus:border-accent transition-colors resize-vertical"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 text-[15px] font-medium rounded-sm hover:bg-accent/90 transition-colors"
                  >
                    Get in touch
                  </button>
                </form>
              )}

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-[15px] text-text-secondary">
                  Prefer to reach out directly? Email us at{" "}
                  <a
                    href="mailto:mcgillptp@gmail.com"
                    className="text-accent hover:underline"
                  >
                    mcgillptp@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
