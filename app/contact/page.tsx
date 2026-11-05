import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { ContactCard } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Nguyễn Thanh Khiết — backend architecture, ERP, or a game of badminton.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <main id="top">
      <section className="py-12 md:py-20">
        <div className="wrap">
          <ContactCard heading="h1" />
        </div>
      </section>
      <Footer />
    </main>
  );
}
