import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support the Lab",
  description:
    "Support the McGill PTP Lab — help us shape the governance of transformative technologies through fellowships, research, and public outreach.",
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
