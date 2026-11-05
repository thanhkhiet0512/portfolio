import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { PageHeader, StackGrid } from "@/components/sections";

export const metadata: Metadata = {
  title: "Stack",
  description: "Languages, frameworks, databases and tools Nguyễn Thanh Khiết uses daily.",
  alternates: { canonical: "/stack/" },
};

export default function StackPage() {
  return (
    <main id="top">
      <PageHeader path="stack" title={{ en: "Tools I use daily", vi: "Công cụ tôi dùng hằng ngày" }} />
      <section className="py-12 md:py-16">
        <div className="wrap">
          <StackGrid />
        </div>
      </section>
      <Footer />
    </main>
  );
}
