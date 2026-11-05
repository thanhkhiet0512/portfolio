import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { PageHeader, ProjectList } from "@/components/sections";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies: Nex-Q Super App, Satori ERP on Odoo and eSmiles Dental ERP — architecture and key decisions.",
  alternates: { canonical: "/projects/" },
};

export default function ProjectsPage() {
  return (
    <main id="top">
      <PageHeader
        path="projects"
        title={{ en: "Case studies", vi: "Dự án tiêu biểu" }}
        sub={{
          en: "How each system is put together — open one for the architecture and the decisions behind it.",
          vi: "Mỗi hệ thống được dựng thế nào — mở từng dự án để xem kiến trúc và các quyết định phía sau.",
        }}
      />
      <section className="py-12 md:py-16">
        <div className="wrap">
          <ProjectList />
        </div>
      </section>
      <Footer />
    </main>
  );
}
