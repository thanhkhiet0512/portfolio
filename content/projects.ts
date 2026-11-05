import type { Project, ProjectStatus, L } from "./types";

export const statusLabel: Record<ProjectStatus, L> = {
  soon: { en: "starting soon", vi: "sắp triển khai" },
  live: { en: "in production", vi: "đang vận hành" },
  shipped: { en: "shipped", vi: "đã bàn giao" },
};

/**
 * Case studies. Each one gets a page at /projects/<slug>/.
 * Order here is the order on the home page.
 */
export const projects: Project[] = [
  {
    slug: "nex-q",
    name: { en: "Nex-Q Super App", vi: "Nex-Q Super App" },
    status: "soon",
    company: "Satori Holding",
    role: "Backend developer",
    period: { en: "Next up", vi: "Kế tiếp" },
    summary: {
      en: "Membership and commerce super app for the group's whole ecosystem — designed around a ledger, an outbox and a policy engine.",
      vi: "Super app thành viên và mua sắm cho cả hệ sinh thái — thiết kế quanh sổ cái, outbox và policy engine.",
    },
    overview: {
      en: "A membership and commerce super app for the company's whole ecosystem — mobile app, admin web and merchant portal. The first release covers multi-role accounts, orders and payments, prepaid packages, loyalty points and tiers, affiliate commissions, and a configurable policy engine for campaigns.",
      vi: "Super app thành viên và mua sắm cho toàn bộ hệ sinh thái công ty — gồm app di động, web quản trị và cổng merchant. Giai đoạn đầu gồm tài khoản đa vai trò, đơn hàng và thanh toán, gói mua trước, tích điểm và hạng thành viên, hoa hồng cộng tác viên, và policy engine cấu hình được cho các chiến dịch.",
    },
    responsibilities: [
      {
        en: "Backend developer for the first release, starting soon.",
        vi: "Phụ trách backend cho giai đoạn đầu, sắp bắt đầu.",
      },
      {
        en: "Migrating existing customers onto the new platform.",
        vi: "Chuyển đổi khách hàng hiện có sang nền tảng mới.",
      },
    ],
    decisionsTitle: { en: "Key decisions", vi: "Quyết định kỹ thuật" },
    decisions: [
      {
        title: { en: "Modular monolith", vi: "Modular monolith" },
        body: {
          en: "NestJS with strict module boundaries — one deployable, clean seams to split later.",
          vi: "NestJS với ranh giới module chặt chẽ — một bản deploy, dễ tách ra sau này.",
        },
      },
      {
        title: { en: "Double-entry ledger", vi: "Sổ cái ghi sổ kép" },
        body: {
          en: "Every point, payment and commission is a balanced entry, so balances can always be audited.",
          vi: "Mọi điểm thưởng, thanh toán, hoa hồng đều là bút toán cân bằng — số dư luôn kiểm tra lại được.",
        },
      },
      {
        title: { en: "Idempotency keys + transactional outbox", vi: "Idempotency key + transactional outbox" },
        body: {
          en: "Retries never double-charge; events are written in the same transaction and delivered via pg-boss.",
          vi: "Retry không bao giờ trừ tiền hai lần; event ghi chung transaction và phát qua pg-boss.",
        },
      },
      {
        title: { en: "Built to grow", vi: "Sẵn sàng tăng trưởng" },
        body: {
          en: "Migrating existing customers; designed to scale without re-architecting.",
          vi: "Chuyển đổi khách hàng cũ; thiết kế để tăng tải không phải đổi kiến trúc.",
        },
      },
    ],
    diagram: "nexq",
    diagramTitle: { en: "Architecture", vi: "Kiến trúc" },
    stack: ["NestJS", "TypeScript", "PostgreSQL", "Drizzle", "pg-boss", "Testcontainers", "Docker"],
  },
  {
    slug: "satori-erp",
    name: { en: "Satori ERP on Odoo", vi: "ERP Satori trên Odoo" },
    status: "live",
    company: "Satori Holding",
    role: "Software Engineer",
    period: { en: "Apr 2026 — Present", vi: "04/2026 — Hiện tại" },
    summary: {
      en: "End-to-end order-to-delivery operations on Odoo, with every warehouse type on one standard process.",
      vi: "Toàn bộ luồng đơn hàng đến giao vận trên Odoo, mọi loại kho chạy chung một quy trình chuẩn.",
    },
    overview: {
      en: "End-to-end operations in Odoo — orders, warehousing, outbound and delivery — across the central warehouse, branch warehouses and delivery-partner warehouses.",
      vi: "Toàn bộ quy trình vận hành trên Odoo — đơn hàng, kho, xuất kho, giao vận — cho kho tổng, các kho con và kho giao hộ.",
    },
    responsibilities: [
      {
        en: "Building and customising the full order-to-delivery flow in Odoo — from sales orders through warehouse processing and outbound to shipping.",
        vi: "Xây dựng và tùy biến toàn bộ luồng trên Odoo — từ đơn hàng, xử lý kho, xuất kho đến giao vận.",
      },
      {
        en: "Brought the central, branch and delivery-partner warehouses onto **one standardised, digitised process**.",
        vi: "Đưa kho tổng, các kho con và kho giao hộ về **một quy trình chuẩn, chuyển đổi số hoàn toàn**.",
      },
      {
        en: "Mentoring an intern on code structure and Odoo development, in a team of 11.",
        vi: "Mentor một bạn intern về cấu trúc code và phát triển trên Odoo, trong team 11 người.",
      },
    ],
    decisionsTitle: { en: "What I did", vi: "Tôi đã làm" },
    decisions: [
      {
        title: { en: "Custom modules", vi: "Module tùy biến" },
        body: { en: "Covering the full order-to-delivery flow.", vi: "Cho toàn bộ luồng từ đơn hàng đến giao vận." },
      },
      {
        title: { en: "One standard process", vi: "Một quy trình chuẩn" },
        body: {
          en: "Replacing manual, per-warehouse steps across every warehouse type.",
          vi: "Thay cho thao tác thủ công ở từng kho, áp dụng cho mọi loại kho.",
        },
      },
      {
        title: { en: "Mentoring", vi: "Mentor" },
        body: {
          en: "Guiding an intern on code structure and Odoo development.",
          vi: "Hướng dẫn bạn intern về cấu trúc code và phát triển trên Odoo.",
        },
      },
    ],
    diagram: "satori",
    diagramTitle: { en: "Flow", vi: "Luồng xử lý" },
    stack: ["Python", "Odoo", "PostgreSQL", "XML"],
  },
  {
    slug: "esmiles",
    name: { en: "eSmiles Dental ERP", vi: "eSmiles Dental ERP" },
    status: "shipped",
    company: "SMAC Technology",
    role: "Backend Developer",
    period: { en: "Oct 2025 — Mar 2026", vi: "10/2025 — 03/2026" },
    summary: {
      en: "HIS-style ERP for a dental clinic chain, built on Clean Architecture and load-tested with k6.",
      vi: "ERP kiểu HIS cho chuỗi nha khoa, dựng theo Clean Architecture và load test bằng k6.",
    },
    overview: {
      en: "An HIS-style ERP for a dental clinic chain — booking, examinations, dental lab workflows and patient records in one system.",
      vi: "Hệ thống ERP kiểu HIS cho chuỗi nha khoa — đặt lịch, thăm khám, quy trình labo và lưu trữ hồ sơ trong một hệ thống.",
    },
    responsibilities: [
      {
        en: "Built backend modules covering appointment booking, examinations, dental lab workflows that support doctors, and patient records.",
        vi: "Xây dựng các module backend: đặt lịch, thăm khám, quy trình labo hỗ trợ bác sĩ và lưu trữ hồ sơ bệnh nhân.",
      },
      {
        en: "Set up the backend codebase on **Clean Architecture**.",
        vi: "Dựng source backend theo **Clean Architecture**.",
      },
      {
        en: "Integrated **k6** to load-test and benchmark APIs before release.",
        vi: "Tích hợp **k6** để load test và đo hiệu năng API trước khi release.",
      },
    ],
    decisionsTitle: { en: "Key decisions", vi: "Quyết định kỹ thuật" },
    decisions: [
      {
        title: { en: "Clean Architecture", vi: "Clean Architecture" },
        body: {
          en: "Domain logic independent of NestJS and the database, so new modules slot in without rewrites.",
          vi: "Logic nghiệp vụ độc lập với NestJS và database, thêm module mới không phải viết lại.",
        },
      },
      {
        title: { en: "Measured, not guessed", vi: "Đo, không đoán" },
        body: {
          en: "APIs load-tested and benchmarked with k6 before every release.",
          vi: "API được load test và đo hiệu năng bằng k6 trước mỗi lần release.",
        },
      },
    ],
    diagram: "esmiles",
    diagramTitle: { en: "Layers", vi: "Các tầng" },
    stack: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker", "k6"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
