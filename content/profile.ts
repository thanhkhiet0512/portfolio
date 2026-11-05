import type { L } from "./types";

export const profile = {
  name: "Nguyễn Thanh Khiết",
  role: "Software Engineer",
  company: "Satori Holding",
  email: "nguyenkhiet0512@gmail.com",
  github: "https://github.com/thanhkhiet0512",
  site: "https://thanhkhiet.dev",
  photo: "/photo.jpg",

  status: { en: "Building ERP @ Satori Holding", vi: "Đang xây ERP @ Satori Holding" } satisfies L,
  headline: "backend engineer",
  focus: ["NestJS", "PostgreSQL", "Odoo"],
  location: { en: "Ho Chi Minh City", vi: "TP. Hồ Chí Minh" } satisfies L,

  lead: {
    en: "I design **backend systems that stay clean as they grow** — modular NestJS services, solid PostgreSQL schemas, and ERP workflows that turn real-world operations into software.",
    vi: "Tôi xây dựng **hệ thống backend gọn gàng, dễ mở rộng** — service NestJS chia module rõ ràng, schema PostgreSQL chặt chẽ, và các quy trình ERP đưa vận hành thực tế lên phần mềm.",
  } satisfies L,

  aboutTitle: { en: "From robots to backends", vi: "Từ robot đến backend" } satisfies L,
  about: [
    {
      en: "I started university in **Automation Engineering**. Joining the Robocon team at HCMC University of Technology and Education put me hands-on with robots and IoT — and I found the code was the part I enjoyed most. In my second year I switched to IT and never looked back.",
      vi: "Tôi bắt đầu đại học với ngành **Tự động hóa**. Tham gia đội Robocon của trường Đại học Sư phạm Kỹ thuật TP.HCM, tôi được làm việc trực tiếp với robot và IoT — và nhận ra phần mình thích nhất lại là viết code. Từ năm hai, tôi chuyển hẳn sang học IT.",
    },
    {
      en: "Today I'm a **backend-focused software engineer**. At SMAC I built the backend for eSmiles, an ERP for a dental clinic chain. At Satori Holding I'm building the company's Odoo ERP, and I'm about to take on the backend of **Nex-Q**, the super app for the group's whole ecosystem.",
      vi: "Hiện tôi là **software engineer thiên về backend**. Ở SMAC, tôi xây dựng backend cho eSmiles — hệ thống ERP cho chuỗi nha khoa. Ở Satori Holding, tôi đang xây hệ thống ERP trên Odoo và sắp đảm nhận backend cho **Nex-Q**, super app của toàn bộ hệ sinh thái công ty.",
    },
    {
      en: "What I care about most: clean code, systems that scale, and codebases that are easy to maintain long after release. Off-screen, it's badminton — and only badminton.",
      vi: "Điều tôi coi trọng nhất: code sạch, hệ thống mở rộng được, và codebase dễ bảo trì lâu dài. Ngoài giờ code thì là cầu lông — và chỉ cầu lông.",
    },
  ] satisfies L[],

  /** Rows of the profile.yml card. */
  facts: [
    { key: "location", value: { en: "Ho Chi Minh City", vi: "TP. Hồ Chí Minh" } },
    { key: "current", value: { en: "Engineer @ Satori", vi: "Engineer @ Satori" } },
    { key: "coding_since", value: { en: "Oct 2025 (pro)", vi: "10/2025 (đi làm)" } },
    { key: "studying", value: { en: "Bachelor's · UIT", vi: "Liên thông · UIT" } },
    { key: "diploma", value: { en: "FPT Polytechnic", vi: "FPT Polytechnic" } },
    { key: "off_screen", value: { en: "badminton", vi: "cầu lông" } },
  ] satisfies { key: string; value: L }[],

  principles: [
    {
      slug: "clean-code",
      title: { en: "Clean code", vi: "Code sạch" },
      body: {
        en: "Clear names, small modules and Clean Architecture boundaries — code that reads like the business it models.",
        vi: "Đặt tên rõ ràng, module nhỏ, ranh giới Clean Architecture — code đọc lên là hiểu nghiệp vụ.",
      },
    },
    {
      slug: "built-to-scale",
      title: { en: "Built to scale", vi: "Sẵn sàng mở rộng" },
      body: {
        en: "Modular design and measured performance — k6 load tests instead of guesswork.",
        vi: "Thiết kế theo module, đo hiệu năng thật bằng k6 thay vì đoán mò.",
      },
    },
    {
      slug: "maintainable",
      title: { en: "Easy to maintain", vi: "Dễ bảo trì" },
      body: {
        en: "Structure the next developer — or an intern I'm mentoring — can pick up without a walkthrough.",
        vi: "Cấu trúc mà người sau — kể cả bạn intern tôi đang hướng dẫn — đọc là nắm được.",
      },
    },
  ] satisfies { slug: string; title: L; body: L }[],

  contact: {
    title: { en: "Let's talk.", vi: "Kết nối nhé." },
    body: {
      en: "Backend architecture, ERP, or a game of badminton — my inbox is open.",
      vi: "Kiến trúc backend, ERP hay một trận cầu lông — cứ nhắn cho tôi.",
    },
  } satisfies { title: L; body: L },
};
