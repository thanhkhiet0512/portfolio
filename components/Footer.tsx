import { profile } from "@/content/profile";
import { T } from "./T";

export function Footer() {
  return (
    <footer className="pt-9 pb-12 font-mono text-[12.5px] text-fg-3">
      <div className="wrap flex flex-wrap justify-between gap-x-6 gap-y-3 border-t border-line pt-7">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <T v={{ en: "built with Next.js + Tailwind · deployed by GitHub Actions", vi: "làm bằng Next.js + Tailwind · deploy bằng GitHub Actions" }} />
        <a href="#top" className="hover:text-fg">
          <T v={{ en: "back to top ↑", vi: "lên đầu ↑" }} />
        </a>
      </div>
    </footer>
  );
}
