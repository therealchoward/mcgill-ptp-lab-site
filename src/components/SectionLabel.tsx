interface SectionLabelProps {
  number: string;
  label: string;
}

export function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-text-secondary mb-4">
      {number} — {label}
    </p>
  );
}
