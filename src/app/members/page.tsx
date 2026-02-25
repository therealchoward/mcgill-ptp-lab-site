import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { members } from "@/data/members";

export const metadata: Metadata = {
  title: "Members",
  description:
    "Meet the team — philosophers, technologists, and policy experts investigating the ethical dimensions of AI, social media, gaming, and emerging technologies.",
};

export default function MembersPage() {
  return (
    <>
      <PageHero
        title="Members"
        subtitle="Our members and affiliates include philosophers, technologists, and policy experts investigating the ethical and political dimensions of AI, social media, gaming, and other emerging technologies."
      />

      <section className="px-6 pb-24 md:pb-32">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.05}>
                <div className="group">
                  <div className="aspect-square overflow-hidden rounded-sm bg-border">
                    <Image
                      src={member.photo}
                      alt={`Photo of ${member.name}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                  <p className="mt-1 text-[14px] text-text-secondary leading-snug">
                    {member.role}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
