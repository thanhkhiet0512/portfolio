import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { ExperienceList, PageHeader } from "@/components/sections";

export const metadata: Metadata = {
  title: "Experience",
  description: "Where Nguyễn Thanh Khiết has worked: Satori Holding (Odoo ERP) and SMAC Technology (eSmiles dental ERP).",
  alternates: { canonical: "/experience/" },
};

export default function ExperiencePage() {
  return (
    <main id="top">
      <PageHeader
        path="experience"
        title={{ en: "Where I've worked", vi: "Nơi tôi đã làm việc" }}
        sub={{ en: "Newest first. Each role links to its case study.", vi: "Mới nhất trước. Mỗi vị trí có link sang dự án tương ứng." }}
      />
      <section className="py-12 md:py-16">
        <div className="wrap">
          <ExperienceList />
        </div>
      </section>
      <Footer />
    </main>
  );
}
