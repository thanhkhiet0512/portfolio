import Link from "next/link";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "@/components/icons";
import { ContactCard, Hero, PAGES, ProjectList } from "@/components/sections";
import { T } from "@/components/T";
import { Section, SectionHead } from "@/components/ui";

export default function Home() {
  return (
    <main id="top">
      <Hero />

      {/* featured projects */}
      <Section id="projects">
        <SectionHead
          num="01"
          id="projects"
          title={{ en: "Case studies", vi: "Dự án tiêu biểu" }}
          sub={{
            en: "How each system is put together — open one for the architecture and the decisions behind it.",
            vi: "Mỗi hệ thống được dựng thế nào — mở từng dự án để xem kiến trúc và các quyết định phía sau.",
          }}
        />
        <ProjectList />
      </Section>

      {/* links to the inner pages */}
      <Section id="explore">
        <SectionHead num="02" id="explore" title={{ en: "Explore", vi: "Khám phá thêm" }} />
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {PAGES.map((p) => (
            <Link key={p.href} href={p.href} className="reveal card group flex flex-col p-5 transition hover:border-accent/50">
              <span className="font-mono text-xs text-fg-3">
                ~/<span className="text-accent">{p.path}</span>
              </span>
              <h3 className="mt-2 mb-1.5 text-lg font-semibold group-hover:text-accent">
                <T v={p.title} />
              </h3>
              <T v={p.body} as="p" className="m-0 mb-4 flex-1 text-sm text-fg-2" />
              <ArrowRight className="size-4 text-fg-3 transition group-hover:translate-x-1 group-hover:text-accent" />
            </Link>
          ))}
        </div>
      </Section>

      <Section id="contact" last>
        <ContactCard />
      </Section>

      <Footer />
    </main>
  );
}
