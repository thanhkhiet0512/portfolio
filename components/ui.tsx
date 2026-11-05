import type { ReactNode } from "react";
import type { L, ProjectStatus } from "@/content/types";
import { statusLabel } from "@/content/projects";
import { T } from "./T";

/** Two-column section header: "01 // about" on the left, title on the right. */
export function SectionHead({ num, id, title, sub }: { num: string; id: string; title: L; sub?: L }) {
  return (
    <div className="reveal mb-8 grid items-baseline gap-3 md:mb-12 md:grid-cols-[220px_1fr] md:gap-8">
      <p className="kicker">
        {num} <span className="text-fg-3">// {id}</span>
      </p>
      <div>
        <h2 className="m-0 text-[clamp(28px,3.6vw,40px)] leading-[1.1] font-bold tracking-[-0.03em]">
          <T v={title} />
        </h2>
        {sub && <T v={sub} as="p" className="mt-2.5 mb-0 max-w-[40em] text-fg-2" />}
      </div>
    </div>
  );
}

export function Section({ id, children, last = false }: { id: string; children: ReactNode; last?: boolean }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${last ? "" : "border-b border-line"}`}>
      <div className="wrap">{children}</div>
    </section>
  );
}

const badgeTone: Record<ProjectStatus, string> = {
  soon: "text-str border-str/40 bg-str/10",
  live: "text-accent border-accent/40 bg-accent-soft",
  shipped: "text-key border-key/40 bg-key/10",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={`rounded border px-2 py-0.5 font-mono text-[11.5px] font-semibold ${badgeTone[status]}`}>
      <T v={statusLabel[status]} />
    </span>
  );
}

export function Tags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <span key={t} className="tag">
          {t}
        </span>
      ))}
    </div>
  );
}
