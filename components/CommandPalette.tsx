"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { copyEmail, getLang, toggleLang, toggleTheme, type Lang } from "@/lib/client";

type Command = { en: string; vi: string; hint: string; run: () => void };

export function CommandPalette() {
  const router = useRouter();
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [sel, setSel] = useState(0);
  const [lang, setLang] = useState<Lang>("en");

  const go = useCallback(
    (href: string) => () => {
      router.push(href);
    },
    [router],
  );

  const commands = useMemo<Command[]>(
    () => [
      { en: "Home", vi: "Trang chủ", hint: "/", run: go("/") },
      { en: "About", vi: "Giới thiệu", hint: "/about", run: go("/about/") },
      { en: "Experience", vi: "Kinh nghiệm", hint: "/experience", run: go("/experience/") },
      { en: "Projects", vi: "Dự án", hint: "/projects", run: go("/projects/") },
      ...projects.map((p) => ({
        en: `Open case study: ${p.name.en}`,
        vi: `Mở dự án: ${p.name.vi}`,
        hint: `/projects/${p.slug}`,
        run: go(`/projects/${p.slug}/`),
      })),
      { en: "Stack", vi: "Công nghệ", hint: "/stack", run: go("/stack/") },
      { en: "Contact", vi: "Liên hệ", hint: "/contact", run: go("/contact/") },
      { en: "Copy email", vi: "Sao chép email", hint: "copy", run: copyEmail },
      { en: "Send email", vi: "Gửi email", hint: "mailto", run: () => (window.location.href = `mailto:${profile.email}`) },
      { en: "Open GitHub", vi: "Mở GitHub", hint: "↗", run: () => window.open(profile.github, "_blank", "noopener") },
      { en: "Toggle theme", vi: "Đổi giao diện sáng/tối", hint: "theme", run: toggleTheme },
      { en: "Chuyển sang tiếng Việt", vi: "Switch to English", hint: "lang", run: toggleLang },
    ],
    [go],
  );

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return commands.filter((c) => !q || `${c.en} ${c.vi} ${c.hint}`.toLowerCase().includes(q));
  }, [commands, query]);

  const open = useCallback(() => {
    const d = dialog.current;
    if (!d || d.open) return;
    setLang(getLang());
    setQuery("");
    setSel(0);
    d.showModal();
    input.current?.focus();
  }, []);

  const close = () => dialog.current?.close();
  const exec = (c: Command) => {
    close();
    c.run();
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if ((e.metaKey || e.ctrlKey) && k === "k") {
        e.preventDefault();
        if (dialog.current?.open) close();
        else open();
      } else if (e.key === "/" && !dialog.current?.open && !/input|textarea/i.test((document.activeElement as HTMLElement)?.tagName ?? "")) {
        e.preventDefault();
        open();
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-palette", open);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-palette", open);
    };
  }, [open]);

  useEffect(() => {
    dialog.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: "nearest" });
  }, [sel]);

  return (
    <dialog
      ref={dialog}
      aria-label="Command palette"
      onClick={(e) => e.target === dialog.current && close()}
      className="m-auto mt-[14vh] w-[min(560px,calc(100vw-32px))] rounded-lg border border-line-2 bg-surface p-0 text-fg backdrop:bg-black/50 backdrop:backdrop-blur-[3px]"
    >
      <div className="flex items-center gap-2.5 border-b border-line px-4 py-3.5">
        <span className="font-mono text-sm font-semibold text-accent">&gt;</span>
        <input
          ref={input}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSel(0);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setSel((s) => (s + 1) % Math.max(shown.length, 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setSel((s) => (s - 1 + shown.length) % Math.max(shown.length, 1));
            } else if (e.key === "Enter" && shown[sel]) {
              e.preventDefault();
              exec(shown[sel]);
            }
          }}
          placeholder={lang === "vi" ? "Gõ lệnh hoặc tìm kiếm…" : "Type a command or search…"}
          aria-label="Search commands"
          autoComplete="off"
          spellCheck={false}
          className="min-w-0 flex-1 bg-transparent font-mono text-[15px] text-fg outline-none placeholder:text-fg-3"
        />
      </div>
      <ul role="listbox" className="m-0 max-h-[340px] list-none overflow-auto p-1.5">
        {shown.length === 0 && (
          <li className="p-4 text-center font-mono text-[13px] text-fg-3">{lang === "vi" ? "Không có lệnh phù hợp" : "No matching command"}</li>
        )}
        {shown.map((c, i) => (
          <li
            key={c.hint + c.en}
            role="option"
            aria-selected={i === sel}
            onMouseMove={() => sel !== i && setSel(i)}
            onClick={() => exec(c)}
            className={`flex cursor-pointer items-center justify-between gap-2.5 rounded-md px-3 py-2.5 text-[14.5px] ${
              i === sel ? "bg-surface-2 text-fg" : "text-fg-2"
            }`}
          >
            <span>{c[lang]}</span>
            <small className={`font-mono text-[11.5px] ${i === sel ? "text-accent" : "text-fg-3"}`}>{c.hint}</small>
          </li>
        ))}
      </ul>
      <div className="flex gap-3.5 border-t border-line px-3.5 py-2 font-mono text-[11.5px] text-fg-3">
        <span>
          <kbd className="kbd">↑</kbd> <kbd className="kbd">↓</kbd> {lang === "vi" ? "di chuyển" : "navigate"}
        </span>
        <span>
          <kbd className="kbd">↵</kbd> {lang === "vi" ? "chạy" : "run"}
        </span>
        <span>
          <kbd className="kbd">esc</kbd> {lang === "vi" ? "đóng" : "close"}
        </span>
      </div>
    </dialog>
  );
}
