"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { toggleLang, toggleTheme } from "@/lib/client";
import { MoonIcon, SunIcon } from "./icons";

/** Top navigation — each item is its own page. */
export const NAV = ["about", "experience", "projects", "stack", "contact"] as const;

export function Header() {
  const pathname = usePathname();
  const [mod, setMod] = useState("⌘");

  useEffect(() => {
    if (!/Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent)) setMod("Ctrl");
  }, []);

  const isActive = (id: string) => pathname === `/${id}` || pathname.startsWith(`/${id}/`);

  const btn =
    "inline-flex h-8 min-w-8 items-center justify-center gap-1.5 rounded-md border border-line bg-surface px-2 font-mono text-xs font-medium text-fg-2 transition hover:border-line-2 hover:text-fg";

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="wrap flex h-[60px] items-center gap-4">
        <Link href="/" className="whitespace-nowrap font-mono text-[15px] font-semibold tracking-tight" aria-label="thanhkhiet.dev — home">
          <span className="text-accent">~/</span>thanhkhiet.dev
          <span className="blink ml-0.5 inline-block h-[15px] w-2 bg-accent align-[-2px]" aria-hidden="true" />
        </Link>

        <nav className="ml-auto hidden gap-1 md:flex" aria-label="Pages">
          {NAV.map((id) => (
            <Link
              key={id}
              href={`/${id}/`}
              aria-current={isActive(id) ? "page" : undefined}
              className={`rounded-md px-2.5 py-1.5 font-mono text-[13px] font-medium transition hover:bg-surface-2 hover:text-fg ${
                isActive(id) ? "text-accent" : "text-fg-3"
              }`}
            >
              {isActive(id) && <span className="opacity-60">./</span>}
              {id}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1.5 md:ml-2">
          <button type="button" className={btn} onClick={() => window.dispatchEvent(new Event("open-palette"))} aria-label="Open command palette">
            <span className="hidden md:inline">
              <kbd className="kbd">{mod}</kbd> <kbd className="kbd">K</kbd>
            </span>
            <span className="md:hidden">menu</span>
          </button>
          <button type="button" className={btn} onClick={toggleLang} aria-label="Switch language">
            <span className="en">VI</span>
            <span className="vi">EN</span>
          </button>
          <button type="button" className={btn} onClick={toggleTheme} aria-label="Toggle theme">
            <MoonIcon className="icon-moon size-[15px]" />
            <SunIcon className="icon-sun size-[15px]" />
          </button>
        </div>
      </div>
    </header>
  );
}
