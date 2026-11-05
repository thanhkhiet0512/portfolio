import Link from "next/link";
import { Clock, CopyEmailButton } from "./client-bits";
import { ArrowRight, CopyIcon, GitHubIcon, MailIcon } from "./icons";
import { StatusBadge, Tags } from "./ui";
import { T } from "./T";
import { Terminal } from "./Terminal";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { now, nowUpdated, stack } from "@/content/stack";
import type { L } from "@/content/types";

/** Page title block used at the top of every inner page: "~/about" + big title. */
export function PageHeader({ path, title, sub }: { path: string; title: L; sub?: L }) {
  return (
    <section className="border-b border-line py-12 md:py-16">
      <div className="wrap">
        <p className="kicker mb-4">
          <span className="text-fg-3">~/</span>
          {path}
        </p>
        <h1 className="m-0 text-[clamp(36px,6vw,56px)] leading-[1.05] font-bold tracking-[-0.04em]">
          <T v={title} />
        </h1>
        {sub && <T v={sub} as="p" className="mt-4 mb-0 max-w-[40em] text-lg text-fg-2" />}
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section className="border-b border-line py-14 md:py-24">
      <div className="wrap grid items-center gap-10 md:grid-cols-[1.05fr_1fr] md:gap-14">
        <div>
          <span className="inline-flex items-center gap-2 rounded border border-line bg-surface px-3 py-1 font-mono text-xs font-medium text-fg-2">
            <span className="blinkdot size-[7px] bg-accent" aria-hidden="true" />
            <T v={profile.status} />
          </span>
          <h1 className="mt-6 mb-2.5 text-[clamp(40px,6vw,64px)] leading-[1.02] font-bold tracking-[-0.04em]">{profile.name}</h1>
          <p className="mt-0 mb-5 font-mono text-[15px] text-fg-2">
            <b className="font-medium text-accent">{profile.headline}</b> · {profile.focus.join(" · ")}
          </p>
          <T v={profile.lead} as="p" className="prose-strong mt-0 mb-7 max-w-[34em] text-lg text-fg-2" />
          <div className="flex flex-wrap gap-2.5">
            <Link className="btn btn-primary" href="/projects/">
              <T v={{ en: "View case studies", vi: "Xem dự án" }} />
              <ArrowRight />
            </Link>
            <a className="btn" href={profile.github} target="_blank" rel="noopener">
              <GitHubIcon /> GitHub
            </a>
            <CopyEmailButton className="btn">
              <CopyIcon />
              <T v={{ en: "Copy email", vi: "Sao chép email" }} />
            </CopyEmailButton>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-[12.5px] text-fg-3">
            <span>
              <span className="text-accent">› </span>
              <T v={profile.location} />
            </span>
            <span>
              <span className="text-accent">› </span>
              <Clock />
            </span>
            <span>
              <span className="text-accent">› </span>
              <T v={{ en: "press ⌘K / Ctrl+K to navigate", vi: "bấm ⌘K / Ctrl+K để điều hướng" }} />
            </span>
          </div>
        </div>
        <Terminal />
      </div>
    </section>
  );
}

export function About() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
      <div className="reveal prose-strong max-w-[46em]">
        {profile.about.map((p, i) => (
          <T key={i} v={p} as="p" className="mt-0 mb-[18px] text-[17px] text-fg-2" />
        ))}
      </div>
      <aside className="reveal card max-w-[360px] self-start overflow-hidden">
        <img src={profile.photo} alt={profile.name} width={440} height={440} loading="lazy" className="aspect-square h-auto w-full object-cover" />
        <div className="border-b border-line bg-surface-2 px-[18px] py-2 font-mono text-xs text-fg-3">profile.yml</div>
        <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-3.5 gap-y-2 px-[18px] py-4 font-mono text-[12.5px] leading-normal">
          {profile.facts.map((f) => (
            <div key={f.key} className="contents">
              <dt className="text-key">{f.key}</dt>
              <dd className="m-0 text-right text-fg-2">
                <T v={f.value} />
              </dd>
            </div>
          ))}
        </dl>
      </aside>
    </div>
  );
}

export function Principles() {
  return (
    <div className="grid gap-3.5 md:grid-cols-3">
      {profile.principles.map((p, i) => (
        <div key={p.slug} className="reveal card p-5">
          <span className="font-mono text-xs text-accent">
            0{i + 1} · {p.slug}
          </span>
          <h3 className="mt-2 mb-1.5 text-base font-semibold">
            <T v={p.title} />
          </h3>
          <T v={p.body} as="p" className="m-0 text-sm text-fg-2" />
        </div>
      ))}
    </div>
  );
}

export function Now() {
  return (
    <div>
      <div className="reveal card py-1.5">
        {now.map((row) => (
          <div key={row.key} className="grid items-baseline gap-1 border-b border-line px-[18px] py-3.5 last:border-b-0 sm:grid-cols-[130px_1fr] sm:gap-5 sm:px-6 sm:py-4">
            <span className="font-mono text-[12.5px] text-accent">{row.key}</span>
            <T v={row.text} as="p" className="prose-strong m-0 text-fg-2" />
          </div>
        ))}
      </div>
      <p className="mt-3 font-mono text-xs text-fg-3">
        <T v={{ en: `// last updated: ${nowUpdated.en}`, vi: `// cập nhật lần cuối: ${nowUpdated.vi}` }} />
      </p>
    </div>
  );
}

export function ExperienceList() {
  return (
    <div className="grid gap-3.5">
      {experience.map((job) => (
        <article key={job.company} className="reveal card grid gap-2.5 p-5 transition hover:border-line-2 sm:grid-cols-[170px_1fr] sm:gap-6 sm:p-[26px]">
          <div className="font-mono text-[12.5px] leading-relaxed text-fg-3">
            <b className="block font-medium text-accent">
              <T v={job.period} />
            </b>
            {job.company}
          </div>
          <div>
            <h3 className="m-0 text-[19px] font-semibold tracking-[-0.015em]">
              {job.role} <span className="font-medium text-fg-3">@ {job.company}</span>
            </h3>
            <p className="mt-1 mb-3.5 font-mono text-[13px] text-fg-2">
              <T v={job.project} />
            </p>
            <ul className="prose-strong m-0 mb-4 grid list-none gap-2 p-0">
              {job.bullets.map((b, i) => (
                <li key={i} className="relative pl-5 text-[15px] text-fg-2">
                  <span className="absolute top-0.5 left-0 font-mono text-[13px] text-accent">→</span>
                  <T v={b} />
                </li>
              ))}
            </ul>
            <Tags items={job.stack} />
            {job.projectSlug && (
              <Link href={`/projects/${job.projectSlug}/`} className="mt-4 inline-flex items-center gap-1.5 font-mono text-[12.5px] text-fg-3 hover:text-accent">
                <T v={{ en: "read the case study", vi: "xem chi tiết dự án" }} />
                <ArrowRight className="size-3.5" />
              </Link>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export function ProjectList() {
  return (
    <div className="grid gap-4">
      {projects.map((p, i) => (
        <Link
          key={p.slug}
          href={`/projects/${p.slug}/`}
          className="reveal card group grid gap-4 p-5 transition hover:border-accent/50 sm:p-7 md:grid-cols-[60px_1fr_auto] md:items-center md:gap-6"
        >
          <span className="font-mono text-sm text-fg-3">0{i + 1}</span>
          <div className="min-w-0">
            <div className="mb-2 flex flex-wrap items-center gap-2.5 font-mono text-[12.5px] text-fg-3">
              <StatusBadge status={p.status} />
              <span>
                {p.company} · <T v={p.period} />
              </span>
            </div>
            <h3 className="m-0 text-2xl font-bold tracking-[-0.025em] group-hover:text-accent">
              <T v={p.name} />
            </h3>
            <T v={p.summary} as="p" className="mt-1.5 mb-4 max-w-[46em] text-fg-2" />
            <Tags items={p.stack} />
          </div>
          <span className="inline-flex items-center gap-2 font-mono text-[13px] text-fg-2 group-hover:text-accent">
            <T v={{ en: "read case study", vi: "xem chi tiết" }} />
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </span>
        </Link>
      ))}
    </div>
  );
}

export function StackGrid() {
  return (
    <div className="grid gap-3.5 sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
      {stack.map((g) => (
        <div key={g.group.en} className="reveal card p-5">
          <h3 className="mt-0 mb-3.5 font-mono text-[13px] font-semibold">
            <span className="text-accent">▸ </span>
            <T v={g.group} />
          </h3>
          <Tags items={g.items} />
        </div>
      ))}
    </div>
  );
}

export function ContactCard({ heading = "h2" }: { heading?: "h1" | "h2" }) {
  const H = heading;
  return (
    <div className="reveal card grid items-center gap-8 px-5 py-7 sm:p-12 md:grid-cols-[1fr_auto]">
      <div className="min-w-0">
        <p className="kicker mb-3.5">
          <span className="text-fg-3">~/</span>contact
        </p>
        <H className="mt-0 mb-2.5 text-[clamp(32px,5vw,52px)] leading-[1.05] font-bold tracking-[-0.04em]">
          <T v={profile.contact.title} />
        </H>
        <T v={profile.contact.body} as="p" className="mt-0 mb-6 text-[17px] text-fg-2" />
        <div className="flex max-w-full flex-wrap items-center gap-2.5 rounded-md border border-line bg-surface-2 px-3.5 py-3 font-mono text-sm">
          <span className="text-accent">$</span>
          <span className="text-fg-3">mail</span>
          <a href={`mailto:${profile.email}`} className="break-all border-b border-dashed border-line-2 text-fg hover:border-accent hover:text-accent">
            {profile.email}
          </a>
          <CopyEmailButton className="ml-auto inline-flex h-8 items-center rounded-md border border-line bg-surface px-2.5 font-mono text-xs font-medium text-fg-2 hover:border-line-2 hover:text-fg">
            <T v={{ en: "copy", vi: "sao chép" }} />
          </CopyEmailButton>
        </div>
      </div>
      <div className="flex gap-2.5 md:grid">
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          <MailIcon />
          <T v={{ en: "Send email", vi: "Gửi email" }} />
        </a>
        <a className="btn" href={profile.github} target="_blank" rel="noopener">
          <GitHubIcon /> GitHub
        </a>
      </div>
    </div>
  );
}

/** Cards on the home page that link to each inner page. */
export const PAGES: { href: string; path: string; title: L; body: L }[] = [
  {
    href: "/about/",
    path: "about",
    title: { en: "About", vi: "Giới thiệu" },
    body: { en: "From robots to backends, what I care about, and what I'm doing now.", vi: "Từ robot đến backend, điều tôi coi trọng, và hiện tại tôi đang làm gì." },
  },
  {
    href: "/experience/",
    path: "experience",
    title: { en: "Experience", vi: "Kinh nghiệm" },
    body: { en: "Satori Holding and SMAC Technology — what I built at each.", vi: "Satori Holding và SMAC Technology — tôi đã xây gì ở mỗi nơi." },
  },
  {
    href: "/projects/",
    path: "projects",
    title: { en: "Projects", vi: "Dự án" },
    body: { en: "Case studies with architecture diagrams and key decisions.", vi: "Case study kèm sơ đồ kiến trúc và quyết định kỹ thuật." },
  },
  {
    href: "/stack/",
    path: "stack",
    title: { en: "Stack", vi: "Công nghệ" },
    body: { en: "Languages, frameworks, databases and tools I use daily.", vi: "Ngôn ngữ, framework, database và công cụ tôi dùng hằng ngày." },
  },
];
