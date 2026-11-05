import Link from "next/link";
import { T } from "@/components/T";

export default function NotFound() {
  return (
    <main className="wrap flex min-h-[70vh] flex-col justify-center py-20 font-mono">
      <p className="m-0 text-sm text-fg-3">
        <span className="text-accent">$</span> cd <span className="text-fg">{"<this page>"}</span>
      </p>
      <h1 className="mt-3 mb-2 text-5xl font-bold tracking-tight">404</h1>
      <p className="m-0 text-fg-2">
        <T v={{ en: "bash: no such file or directory", vi: "bash: không tìm thấy file hoặc thư mục" }} />
      </p>
      <Link href="/" className="btn btn-primary mt-8 self-start">
        cd ~
      </Link>
    </main>
  );
}
