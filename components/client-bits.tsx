"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { copyEmail } from "@/lib/client";

/** Button that copies the email address and shows a toast. */
export function CopyEmailButton({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <button type="button" className={className} onClick={copyEmail}>
      {children}
    </button>
  );
}

/** Live local time in Hồ Chí Minh City. */
export function Clock() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const tick = () =>
      setTime(new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Ho_Chi_Minh", hour: "2-digit", minute: "2-digit" }).format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return <span suppressHydrationWarning>{time ? `${time} GMT+7` : "GMT+7"}</span>;
}

/** Bottom toast, fed by window "toast" events (see lib/client.ts). */
export function Toaster() {
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const on = (e: Event) => {
      setMsg((e as CustomEvent<string>).detail);
      setShow(true);
      clearTimeout(timer);
      timer = setTimeout(() => setShow(false), 1800);
    };
    window.addEventListener("toast", on);
    return () => {
      window.removeEventListener("toast", on);
      clearTimeout(timer);
    };
  }, []);
  return (
    <div
      role="status"
      aria-live="polite"
      className={`pointer-events-none fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 rounded-md bg-fg px-4 py-2.5 font-mono text-[13px] font-medium text-bg transition duration-200 ${
        show ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
    >
      {msg}
    </div>
  );
}

/** Adds .in to every .reveal element as it scrolls into view. Re-runs on navigation. */
export function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -6% 0px" },
    );
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
