import { ScrollReveal } from "./ScrollReveal";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="pt-40 pb-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h1 className="font-serif text-[56px] md:text-[72px] leading-[1.1] tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg text-text-secondary max-w-2xl">
              {subtitle}
            </p>
          )}
        </ScrollReveal>
        <div className="mt-12 h-px bg-border" />
      </div>
    </section>
  );
}
