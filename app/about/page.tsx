import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { About, Now, PageHeader, Principles } from "@/components/sections";
import { T } from "@/components/T";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description: "From robots to backends — background, principles and what Nguyễn Thanh Khiết is working on now.",
  alternates: { canonical: "/about/" },
};

const H = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-0 mb-5 font-mono text-xs font-medium tracking-[0.12em] text-fg-3 uppercase">{children}</h2>
);

export default function AboutPage() {
  return (
    <main id="top">
      <PageHeader path="about" title={profile.aboutTitle} />
      <section className="py-12 md:py-16">
        <div className="wrap grid gap-16">
          <About />
          <div>
            <H>
              <T v={{ en: "Principles", vi: "Nguyên tắc" }} />
            </H>
            <Principles />
          </div>
          <div>
            <H>
              <T v={{ en: "Right now", vi: "Hiện tại" }} />
            </H>
            <Now />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
