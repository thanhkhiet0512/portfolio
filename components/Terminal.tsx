"use client";

import { useEffect, useState, type ReactNode } from "react";
import { prefersReducedMotion } from "@/lib/client";

const k = (s: string) => <span className="text-key">&quot;{s}&quot;</span>;
const s = (v: string) => <span className="text-str">&quot;{v}&quot;</span>;
const arr = (vs: string[]) => (
  <>
    [
    {vs.map((v, i) => (
      <span key={v}>
        {s(v)}
        {i < vs.length - 1 ? ", " : ""}
      </span>
    ))}
    ]
  </>
);

const LINES: ReactNode[] = [
  <>
    <span className="text-accent">$</span> <span className="text-fg">curl -s thanhkhiet.dev/api/me | jq</span>
  </>,
  "{",
  <>  {k("name")}: {s("Nguyễn Thanh Khiết")},</>,
  <>  {k("role")}: {s("Software Engineer")},</>,
  <>  {k("company")}: {s("Satori Holding")},</>,
  <>  {k("focus")}: {arr(["NestJS", "PostgreSQL", "Odoo ERP"])},</>,
  <>  {k("design")}: {arr(["Clean Arch", "DDD", "modular"])},</>,
  <>  {k("values")}: {arr(["clean", "scalable", "maintainable"])},</>,
  <>  {k("location")}: {s("Ho Chi Minh City")},</>,
  <>  {k("off_screen")}: {s("badminton")}</>,
  "}",
  <>
    <span className="text-accent">$</span> <span className="blink inline-block h-4 w-2 bg-fg align-[-3px]" />
  </>,
];

/** Hero terminal that "types" the profile as JSON, one line at a time. */
export function Terminal() {
  const [count, setCount] = useState(LINES.length);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    setCount(0);
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const step = () => {
      i += 1;
      setCount(i);
      if (i < LINES.length) timer = setTimeout(step, i === 1 ? 650 : 70);
    };
    timer = setTimeout(step, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden rounded-lg border border-line bg-surface font-mono text-[13.5px] leading-[1.7]" aria-label="Terminal showing profile as JSON">
      <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-3.5 py-2.5 text-xs text-fg-3" aria-hidden="true">
        <i className="size-[11px] rounded-full bg-[#ff5f57]" />
        <i className="size-[11px] rounded-full bg-[#febc2e]" />
        <i className="size-[11px] rounded-full bg-[#28c840]" />
        <span className="mx-auto -translate-x-[22px]">khiet@hcmc: ~</span>
      </div>
      <pre className="m-0 overflow-x-auto whitespace-pre px-5 pt-[18px] pb-[22px] text-xs/[1.7] text-fg-2 sm:min-h-[360px] sm:text-[13.5px]/[1.7]">
        {LINES.slice(0, count).map((line, i) => (
          <span key={i}>
            {line}
            {i < count - 1 ? "\n" : ""}
          </span>
        ))}
      </pre>
    </div>
  );
}
