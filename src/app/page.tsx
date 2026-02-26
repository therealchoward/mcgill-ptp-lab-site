import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionLabel } from "@/components/SectionLabel";
import { members } from "@/data/members";
import { publications } from "@/data/publications";

const researchAreas = [
  {
    title: "Platform Ethics & Governance",
    description:
      "Analyzing the norms, policies, and technical architectures that shape speech, data, and identity online.",
    href: "/research",
  },
  {
    title: "Data Ethics",
    description:
      "Developing frameworks for responsible data use across AI, digital platforms, and public institutions.",
    href: "/research",
  },
  {
    title: "AI Ethics & Governance",
    description:
      "Addressing questions of algorithmic accountability, bias, transparency, and power in AI development.",
    href: "/research",
  },
  {
    title: "Mental Health & Technology",
    description:
      "Investigating technology-induced psychological harms and the ethics of digital mental health interventions.",
    href: "/research",
  },
];

const outreachItems = [
  {
    title: "The Normative Network",
    description:
      "Our blog exploring questions at the intersection of ethics, tech, and policy.",
  },
  {
    title: "PTP Lab Podcast",
    description:
      "In-depth conversations with researchers on platform governance, AI ethics, and digital policy.",
  },
  {
    title: "AI Myths & Misinformation Workshop",
    description:
      "Examining popular misconceptions about AI using the toolkit of analytic epistemology.",
  },
];

export default function Home() {
  const recentPubs = publications.slice(0, 3);
  const teamPreview = members.slice(0, 8);

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient min-h-[70vh] flex items-center px-6 pt-[72px]">
        <div className="max-w-[1200px] mx-auto w-full py-16 md:py-20">
          <ScrollReveal>
            <h1 className="font-serif text-[44px] sm:text-[56px] md:text-[72px] leading-[1.08] tracking-tight max-w-4xl">
              The McGill Philosophy, Technology &amp; Policy Lab
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-lg md:text-xl font-medium text-text-secondary max-w-2xl">
              Advancing ethical technology design, governance, and policy
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 text-[15px] font-medium rounded-sm hover:bg-accent/90 transition-colors"
              >
                Our Research
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                href="/members"
                className="inline-flex items-center gap-2 border border-foreground text-foreground px-6 py-3 text-[15px] font-medium rounded-sm hover:bg-foreground hover:text-background transition-colors"
              >
                Meet the Team
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Research Pillars */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <SectionLabel number="01" label="Research" />
            <h2 className="font-serif text-[36px] md:text-[44px] leading-tight mt-2">
              Research Areas
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {researchAreas.map((area, i) => (
              <ScrollReveal key={area.title} delay={i * 0.08}>
                <Link
                  href={area.href}
                  className="block p-8 border border-border rounded-sm hover:-translate-y-[3px] hover:shadow-lg transition-all duration-300 group"
                >
                  <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-[15px] text-text-secondary leading-relaxed">
                    {area.description}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Featured Publications */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <SectionLabel number="02" label="Publications" />
            <h2 className="font-serif text-[36px] md:text-[44px] leading-tight mt-2">
              Recent Work
            </h2>
          </ScrollReveal>
          <div className="mt-12 space-y-6">
            {recentPubs.map((pub, i) => (
              <ScrollReveal key={pub.title} delay={i * 0.08}>
                <div className="py-4 border-b border-border">
                  <p className="text-[15px] leading-relaxed">
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
                    <span className="italic text-text-secondary">
                      {pub.venue}.
                    </span>
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 mt-8 text-[15px] font-medium text-accent hover:underline"
            >
              View all publications
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Team Teaser */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <SectionLabel number="03" label="Team" />
            <h2 className="font-serif text-[36px] md:text-[44px] leading-tight mt-2">
              Our People
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
            {teamPreview.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.05}>
                <div className="group">
                  <div className="aspect-square rounded-full overflow-hidden bg-border">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="mt-2 text-[11px] text-center text-text-secondary leading-tight">
                    {member.name.split(" ")[0]}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.4}>
            <Link
              href="/members"
              className="inline-flex items-center gap-2 mt-8 text-[15px] font-medium text-accent hover:underline"
            >
              Meet the full team
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Outreach Teaser */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <SectionLabel number="04" label="Outreach" />
            <h2 className="font-serif text-[36px] md:text-[44px] leading-tight mt-2">
              Public Engagement
            </h2>
            <p className="mt-6 text-[17px] text-text-secondary max-w-2xl leading-relaxed">
              We bring rigorous philosophical analysis to broader audiences
              through our workshops, blog, podcast, and public events.
            </p>
          </ScrollReveal>
          <div className="mt-10 space-y-6">
            {outreachItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="py-4 border-b border-border">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-[15px] text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <Link
              href="/outreach"
              className="inline-flex items-center gap-2 mt-8 text-[15px] font-medium text-accent hover:underline"
            >
              Explore our outreach
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Support CTA */}
      <section className="bg-dark-bg text-white px-6 py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-[36px] md:text-[44px] leading-tight text-white">
              Support the Lab
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-white/70 max-w-2xl">
              The Lab&apos;s work is urgent, interdisciplinary, and producing
              real policy impact. Donor support enables fellowships, workshops,
              and research that shapes the ethical landscape of transformative
              technologies. Help us build the foundations for a just digital
              society.
            </p>
            <Link
              href="/support"
              className="inline-flex items-center gap-2 mt-8 bg-accent text-white px-6 py-3 text-[15px] font-medium rounded-sm hover:bg-accent/90 transition-colors"
            >
              Get in touch
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
