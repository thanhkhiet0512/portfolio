import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Diagram } from "@/components/diagrams";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight } from "@/components/icons";
import { T } from "@/components/T";
import { StatusBadge, Tags } from "@/components/ui";
import { statusLabel, getProject, projects } from "@/content/projects";
import { profile } from "@/content/profile";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.name.en,
    description: p.summary.en,
    alternates: { canonical: `/projects/${p.slug}/` },
    openGraph: { title: `${p.name.en} — ${profile.name}`, description: p.summary.en, url: `/projects/${p.slug}/`, images: [profile.photo] },
  };
}

const H = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-0 mb-4 font-mono text-xs font-medium tracking-[0.12em] text-fg-3 uppercase">{children}</h2>
);

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const i = projects.indexOf(p);
  const prev = projects[i - 1];
  const next = projects[i + 1];

  return (
    <main id="top">
      {/* header */}
      <section className="border-b border-line py-10 md:py-16">
        <div className="wrap">
          <nav className="mb-8 flex flex-wrap items-center gap-1.5 font-mono text-[12.5px] text-fg-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-fg">
              ~
            </Link>
            <span>/</span>
            <Link href="/projects/" className="hover:text-fg">
              projects
            </Link>
            <span>/</span>
            <span className="text-accent">{p.slug}</span>
          </nav>

          <div className="mb-4 flex flex-wrap items-center gap-2.5 font-mono text-[12.5px] text-fg-3">
            <StatusBadge status={p.status} />
            <span>
              {p.company} · <T v={p.period} />
            </span>
          </div>
          <h1 className="m-0 text-[clamp(36px,6vw,60px)] leading-[1.05] font-bold tracking-[-0.04em]">
            <T v={p.name} />
          </h1>
          <T v={p.summary} as="p" className="mt-4 mb-0 max-w-[40em] text-lg text-fg-2" />
        </div>
      </section>

      {/* body */}
      <section className="py-12 md:py-16">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_280px] lg:gap-14">
          <article className="min-w-0">
            <div className="reveal mb-12">
              <H>
                <T v={{ en: "Overview", vi: "Tổng quan" }} />
              </H>
              <T v={p.overview} as="p" className="m-0 text-[17px] text-fg-2" />
            </div>

            <div className="reveal mb-12">
              <H>
                <T v={p.diagramTitle} />
              </H>
              <Diagram kind={p.diagram} />
            </div>

            <div className="reveal mb-12">
              <H>
                <T v={p.decisionsTitle} />
              </H>
              <ol className="m-0 grid list-none gap-3 p-0">
                {p.decisions.map((d, n) => (
                  <li key={d.title.en} className="card grid grid-cols-[36px_1fr] gap-2 p-5">
                    <span className="font-mono text-sm text-accent">0{n + 1}</span>
                    <div>
                      <h3 className="mt-0 mb-1 text-base font-semibold">
                        <T v={d.title} />
                      </h3>
                      <T v={d.body} as="p" className="m-0 text-[15px] text-fg-2" />
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="reveal">
              <H>
                <T v={{ en: "My role", vi: "Vai trò của tôi" }} />
              </H>
              <ul className="prose-strong m-0 grid list-none gap-2.5 p-0">
                {p.responsibilities.map((r, n) => (
                  <li key={n} className="relative pl-5 text-[15.5px] text-fg-2">
                    <span className="absolute top-0.5 left-0 font-mono text-[13px] text-accent">→</span>
                    <T v={r} />
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* facts sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="card overflow-hidden">
              <div className="border-b border-line bg-surface-2 px-[18px] py-2 font-mono text-xs text-fg-3">{p.slug}.yml</div>
              <dl className="m-0 grid gap-3 px-[18px] py-4 font-mono text-[12.5px]">
                <div>
                  <dt className="text-key">role</dt>
                  <dd className="m-0 text-fg-2">{p.role}</dd>
                </div>
                <div>
                  <dt className="text-key">company</dt>
                  <dd className="m-0 text-fg-2">{p.company}</dd>
                </div>
                <div>
                  <dt className="text-key">period</dt>
                  <dd className="m-0 text-fg-2">
                    <T v={p.period} />
                  </dd>
                </div>
                <div>
                  <dt className="text-key">status</dt>
                  <dd className="m-0 text-fg-2">
                    <T v={statusLabel[p.status]} />
                  </dd>
                </div>
                <div>
                  <dt className="mb-2 text-key">stack</dt>
                  <dd className="m-0">
                    <Tags items={p.stack} />
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* prev / next */}
      <section className="border-t border-line py-10">
        <div className="wrap grid gap-3 sm:grid-cols-2">
          {prev ? (
            <Link href={`/projects/${prev.slug}/`} className="card group p-5 hover:border-accent/50">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-3">
                <ArrowLeft className="size-3.5" />
                <T v={{ en: "previous", vi: "trước" }} />
              </span>
              <div className="mt-1 font-semibold group-hover:text-accent">
                <T v={prev.name} />
              </div>
            </Link>
          ) : (
            <Link href="/projects/" className="card group p-5 hover:border-accent/50">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-3">
                <ArrowLeft className="size-3.5" />
                cd ..
              </span>
              <div className="mt-1 font-semibold group-hover:text-accent">
                <T v={{ en: "All projects", vi: "Tất cả dự án" }} />
              </div>
            </Link>
          )}
          {next ? (
            <Link href={`/projects/${next.slug}/`} className="card group p-5 text-right hover:border-accent/50">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-3">
                <T v={{ en: "next", vi: "tiếp" }} />
                <ArrowRight className="size-3.5" />
              </span>
              <div className="mt-1 font-semibold group-hover:text-accent">
                <T v={next.name} />
              </div>
            </Link>
          ) : (
            <Link href="/contact/" className="card group p-5 text-right hover:border-accent/50">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-3">
                <T v={{ en: "say hi", vi: "liên hệ" }} />
                <ArrowRight className="size-3.5" />
              </span>
              <div className="mt-1 font-semibold group-hover:text-accent">
                <T v={{ en: "Let's talk", vi: "Kết nối nhé" }} />
              </div>
            </Link>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
