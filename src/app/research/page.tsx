"use client";

import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionLabel } from "@/components/SectionLabel";
import { publications } from "@/data/publications";

const researchAreas = [
  {
    title: "Platform Ethics & Governance",
    description:
      "We analyze the norms, policies, and technical architectures that shape speech, data, and identity online, and develop normative frameworks for ethical platform design and governance.",
  },
  {
    title: "Data Ethics",
    description:
      "We develop systematic frameworks and practical guidelines for responsible data use across AI, platforms, and public institutions, with attention to power, consent, and social impact.",
  },
  {
    title: "AI Ethics & Governance",
    description:
      "We address questions of algorithmic accountability, bias and fairness, transparency, and the distribution of power in AI development, with a focus on both technical standards and policy frameworks.",
  },
  {
    title: "Mental Health & Technology",
    description:
      "We investigate technology-induced psychological harms, the access and effectiveness of digital mental health interventions, and the ethical boundaries between treatment and enhancement.",
  },
];

const clusters = [
  { name: "AI Ethics & Policy", key: "AI Ethics & Policy" },
  { name: "Data Ethics & Measurement", key: "Data Ethics & Measurement" },
  { name: "Mental Health & Technology", key: "Mental Health & Technology" },
];

function PublicationCitation({
  pub,
}: {
  pub: (typeof publications)[0];
}) {
  return (
    <p className="text-[15px] leading-relaxed py-3">
      <span className="text-text-secondary">
        {pub.authors} ({pub.year}).
      </span>{" "}
      {pub.url ? (
        <a
          href={pub.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          {pub.title}.
        </a>
      ) : (
        <>{pub.title}.</>
      )}{" "}
      <span className="italic text-text-secondary">{pub.venue}.</span>
    </p>
  );
}

export default function ResearchPage() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <PageHero
        title="Research"
        subtitle="Our intellectual focus spans four overlapping areas, united by a commitment to bringing philosophical rigor to the study of emerging technologies."
      />

      {/* Research Areas */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <SectionLabel number="01" label="Research Areas" />
          </ScrollReveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchAreas.map((area, i) => (
              <ScrollReveal key={area.title} delay={i * 0.08}>
                <div className="p-8 border border-border rounded-sm h-full">
                  <h3 className="text-xl font-semibold">{area.title}</h3>
                  <p className="mt-4 text-[15px] text-text-secondary leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Publications */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <SectionLabel number="02" label="Publications" />
            <h2 className="font-serif text-[36px] md:text-[44px] leading-tight mt-2">
              Scholarly Output
            </h2>
          </ScrollReveal>

          {/* Thematic Clusters */}
          <div className="mt-12 space-y-16">
            {clusters.map((cluster) => {
              const clusterPubs = publications.filter((p) =>
                p.clusters.includes(cluster.key)
              );
              return (
                <ScrollReveal key={cluster.key}>
                  <div>
                    <h3 className="text-xl font-semibold mb-6">
                      {cluster.name}
                    </h3>
                    <div className="divide-y divide-border">
                      {clusterPubs.map((pub) => (
                        <PublicationCitation key={pub.title} pub={pub} />
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="my-16 h-px bg-border" />

          {/* Full chronological list */}
          <ScrollReveal>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">
                Complete Publication List
              </h3>
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-[14px] font-medium text-accent hover:underline"
              >
                {showAll ? "Collapse" : "Expand all"}
              </button>
            </div>
          </ScrollReveal>

          {showAll && (
            <div className="mt-6 divide-y divide-border">
              {publications.map((pub) => (
                <PublicationCitation key={pub.title} pub={pub} />
              ))}
            </div>
          )}

          {!showAll && (
            <p className="mt-4 text-[15px] text-text-secondary">
              {publications.length} publications from{" "}
              {publications[publications.length - 1].year} to{" "}
              {publications[0].year}.{" "}
              <button
                onClick={() => setShowAll(true)}
                className="text-accent hover:underline"
              >
                Show all
              </button>
            </p>
          )}
        </div>
      </section>
    </>
  );
}
