"use client";

import { profile } from "@/content/profile";

export type Lang = "en" | "vi";

export const getLang = (): Lang => (document.documentElement.lang === "vi" ? "vi" : "en");

export function toggleLang() {
  const next = getLang() === "vi" ? "en" : "vi";
  document.documentElement.lang = next;
  try {
    localStorage.setItem("lang", next);
  } catch {}
  window.dispatchEvent(new Event("langchange"));
}

const isDark = () => {
  const t = document.documentElement.dataset.theme;
  return t ? t === "dark" : !matchMedia("(prefers-color-scheme: light)").matches;
};

export function toggleTheme() {
  const next = isDark() ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {}
}

export function toast(message: string) {
  window.dispatchEvent(new CustomEvent("toast", { detail: message }));
}

export async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email);
    toast(getLang() === "vi" ? "Đã sao chép email" : "Email copied");
  } catch {
    toast(profile.email);
  }
}

export const prefersReducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
