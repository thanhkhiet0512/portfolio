import type { Job } from "./types";

/** Newest first. Copy a block to add a job. */
export const experience: Job[] = [
  {
    company: "Satori Holding",
    role: "Software Engineer",
    period: { en: "Apr 2026 — Present", vi: "04/2026 — Hiện tại" },
    project: { en: "Company ERP on Odoo · Team of 11", vi: "Hệ thống ERP trên Odoo · Team 11 người" },
    bullets: [
      {
        en: "Building and customising the full order-to-delivery flow in Odoo — from sales orders through warehouse processing and outbound to shipping.",
        vi: "Xây dựng và tùy biến toàn bộ luồng trên Odoo — từ đơn hàng, xử lý kho, xuất kho đến giao vận.",
      },
      {
        en: "Brought the central warehouse, branch warehouses and delivery-partner warehouses onto **one standardised, digitised process**.",
        vi: "Đưa kho tổng, các kho con và kho giao hộ về **một quy trình chuẩn, chuyển đổi số hoàn toàn**.",
      },
      {
        en: "Mentoring an intern on code structure and Odoo development.",
        vi: "Mentor một bạn intern về cấu trúc code và phát triển trên Odoo.",
      },
      {
        en: "Next up: backend developer for **Nex-Q**, the group's ecosystem super app.",
        vi: "Sắp tới: phụ trách backend cho **Nex-Q** — super app của toàn hệ sinh thái công ty.",
      },
    ],
    stack: ["Python", "Odoo", "PostgreSQL", "XML"],
    projectSlug: "satori-erp",
  },
  {
    company: "SMAC Technology",
    role: "Backend Developer",
    period: { en: "Oct 2025 — Mar 2026", vi: "10/2025 — 03/2026" },
    project: { en: "eSmiles · ERP for a dental clinic chain", vi: "eSmiles · ERP cho chuỗi nha khoa" },
    bullets: [
      {
        en: "Built backend modules for an HIS-style platform covering appointment booking, examinations, dental lab workflows that support doctors, and patient records.",
        vi: "Xây dựng các module backend cho nền tảng kiểu HIS: đặt lịch, thăm khám, quy trình labo hỗ trợ bác sĩ và lưu trữ hồ sơ bệnh nhân.",
      },
      {
        en: "Set up the backend codebase on **Clean Architecture**, keeping domain logic separate from frameworks so new modules slot in without rewrites.",
        vi: "Dựng source backend theo **Clean Architecture**, tách logic nghiệp vụ khỏi framework để thêm module mới không phải viết lại.",
      },
      {
        en: "Integrated **k6** to load-test and benchmark APIs before release.",
        vi: "Tích hợp **k6** để load test và đo hiệu năng API trước khi release.",
      },
    ],
    stack: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker", "k6"],
    projectSlug: "esmiles",
  },
];
