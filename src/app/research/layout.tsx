import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research areas and publications of the McGill PTP Lab — platform ethics, data ethics, AI governance, and mental health & technology.",
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
