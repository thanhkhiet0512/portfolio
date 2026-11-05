import type { L } from "./types";

export const stack: { group: L; items: string[] }[] = [
  { group: { en: "languages", vi: "ngôn ngữ" }, items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { group: { en: "backend & api", vi: "backend & api" }, items: ["NestJS", "ExpressJS", "Odoo", "REST", "WebSocket", "Prisma"] },
  { group: { en: "architecture", vi: "kiến trúc" }, items: ["Clean Architecture", "DDD", "Dependency Injection", "Modular monolith"] },
  { group: { en: "databases", vi: "cơ sở dữ liệu" }, items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { group: { en: "devops", vi: "devops" }, items: ["Docker", "Nginx", "GitHub Actions", "Coolify", "VPS"] },
  { group: { en: "quality & security", vi: "kiểm thử & bảo mật" }, items: ["Unit / E2E tests", "k6", "Autocannon", "CASL", "OWASP"] },
  { group: { en: "frontend", vi: "frontend" }, items: ["React", "Next.js", "Tailwind CSS"] },
];

export const now: { key: string; text: L }[] = [
  {
    key: "building",
    text: {
      en: "**Order-to-delivery flows on Odoo** for Satori's warehouses.",
      vi: "**Luồng đơn hàng → giao vận trên Odoo** cho hệ thống kho của Satori.",
    },
  },
  {
    key: "next",
    text: {
      en: "Taking on the backend of **Nex-Q** — ledger, outbox and a policy engine.",
      vi: "Đảm nhận backend cho **Nex-Q** — sổ cái, outbox và policy engine.",
    },
  },
  { key: "learning", text: { en: "Bachelor's (bridging) at **UIT**.", vi: "Học liên thông đại học tại **UIT**." } },
  {
    key: "mentoring",
    text: { en: "An intern on code structure and Odoo development.", vi: "Một bạn intern về cấu trúc code và phát triển Odoo." },
  },
  { key: "off_screen", text: { en: "Badminton. Only badminton.", vi: "Cầu lông. Chỉ cầu lông." } },
];

export const nowUpdated: L = { en: "Nov 2026", vi: "11/2026" };
