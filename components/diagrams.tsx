import type { Project } from "@/content/types";
import { T } from "./T";

const Node = ({ children, tone = "plain" }: { children: React.ReactNode; tone?: "plain" | "hl" | "db" }) => (
  <span
    className={`whitespace-nowrap rounded border bg-surface px-2.5 py-1.5 text-center ${
      tone === "hl"
        ? "border-accent/60 text-accent"
        : tone === "db"
          ? "rounded-b-[9px] border-key/50 text-key"
          : "border-line-2"
    }`}
  >
    {children}
  </span>
);

const Small = ({ children, tone }: { children: React.ReactNode; tone?: "hl" }) => (
  <span className={`whitespace-nowrap rounded border bg-surface px-2 py-1 text-[11.5px] ${tone === "hl" ? "border-accent/60 text-accent" : "border-line-2"}`}>
    {children}
  </span>
);

const Arrow = ({ children }: { children: React.ReactNode }) => <div className="py-1.5 text-center leading-none text-fg-3">{children}</div>;
const Row = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`flex flex-wrap justify-center gap-2 ${className}`}>{children}</div>
);
const Cap = ({ children }: { children: React.ReactNode }) => <div className="mt-3 text-center text-[11px] text-fg-3">{children}</div>;

function NexQ() {
  return (
    <div
      role="img"
      aria-label="Mobile app, admin web and merchant portal call a NestJS modular monolith with accounts, orders, payments, packages, loyalty, affiliate and policy modules, backed by PostgreSQL with a ledger and outbox, and pg-boss workers."
    >
      <Row>
        <Node>mobile app</Node>
        <Node>admin web</Node>
        <Node>merchant portal</Node>
      </Row>
      <Arrow>↓ REST</Arrow>
      <div className="rounded-md border border-dashed border-accent/50 p-3">
        <div className="mb-2.5 text-center font-semibold text-accent">NestJS · modular monolith</div>
        <Row className="gap-1.5">
          {["accounts", "orders", "payments", "packages", "loyalty", "affiliate"].map((m) => (
            <Small key={m}>{m}</Small>
          ))}
          <Small tone="hl">policy engine</Small>
        </Row>
      </div>
      <Arrow>↓</Arrow>
      <Row className="items-center">
        <Node tone="db">PostgreSQL · ledger + outbox</Node>
        <span className="text-fg-3">→</span>
        <Node>pg-boss workers</Node>
      </Row>
    </div>
  );
}

function Satori() {
  return (
    <div role="img" aria-label="Sales order flows to warehouse processing at central, branch or partner warehouses, then outbound, then delivery.">
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        <Node>
          <T v={{ en: "sales order", vi: "đơn hàng" }} />
        </Node>
        <span className="text-fg-3">→</span>
        <Node tone="hl">
          <T v={{ en: "warehouse", vi: "kho" }} />
        </Node>
        <span className="text-fg-3">→</span>
        <Node>
          <T v={{ en: "outbound", vi: "xuất kho" }} />
        </Node>
        <span className="text-fg-3">→</span>
        <Node>
          <T v={{ en: "delivery", vi: "giao vận" }} />
        </Node>
      </div>
      <Arrow>↑</Arrow>
      <Row>
        <Node>
          <T v={{ en: "central", vi: "kho tổng" }} />
        </Node>
        <Node>
          <T v={{ en: "branch", vi: "kho con" }} />
        </Node>
        <Node>
          <T v={{ en: "delivery partner", vi: "kho giao hộ" }} />
        </Node>
      </Row>
      <Cap>
        <T v={{ en: "one process for every warehouse type", vi: "một quy trình cho mọi loại kho" }} />
      </Cap>
    </div>
  );
}

function ESmiles() {
  const layers: [string, string, boolean?][] = [
    ["interface", "REST controllers"],
    ["application", "use cases"],
    ["domain", "entities · rules", true],
    ["infrastructure", "PostgreSQL · Redis"],
  ];
  return (
    <div role="img" aria-label="Clean Architecture layers: interface (REST controllers), application (use cases), domain (entities and rules), infrastructure (PostgreSQL, Redis).">
      <div className="mx-auto grid max-w-[360px] gap-1.5">
        {layers.map(([name, what, core]) => (
          <div key={name} className={`flex justify-between gap-2.5 rounded border bg-surface px-3 py-2 ${core ? "border-accent/60" : "border-line-2"}`}>
            <b className={`font-semibold ${core ? "text-accent" : "text-fg"}`}>{name}</b>
            <span>{what}</span>
          </div>
        ))}
      </div>
      <Cap>booking · examination · dental lab · patient records</Cap>
    </div>
  );
}

const DIAGRAMS = { nexq: NexQ, satori: Satori, esmiles: ESmiles };

export function Diagram({ kind }: { kind: Project["diagram"] }) {
  const D = DIAGRAMS[kind];
  return (
    <div className="rounded-md border border-line bg-surface-2 p-[18px] font-mono text-xs text-fg-2">
      <D />
    </div>
  );
}
