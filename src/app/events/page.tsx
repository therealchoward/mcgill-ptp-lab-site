import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming and past workshops, conferences, and events hosted by the McGill PTP Lab.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events"
        subtitle="Workshops, conferences, and gatherings convening researchers and policymakers on pressing questions in technology ethics."
      />

      <section className="px-6 pb-24 md:pb-32">
        <div className="max-w-[1200px] mx-auto">
          <div className="space-y-8">
            {events.map((event, i) => (
              <ScrollReveal key={event.title} delay={i * 0.08}>
                <article className="p-8 border border-border rounded-sm hover:-translate-y-[3px] hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-[13px] font-medium uppercase tracking-[0.1em] text-accent">
                      {event.date}
                    </span>
                    {event.note && (
                      <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-text-secondary px-2 py-0.5 border border-border rounded-sm">
                        {event.note}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p
                    className="mt-3 text-[15px] text-text-secondary leading-relaxed max-w-3xl"
                    dangerouslySetInnerHTML={{ __html: event.description }}
                  />
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
