import type { NextConfig } from "next";

// Static export: `npm run build` writes a plain static site to ./out,
// which GitHub Pages serves at https://thanhkhiet.dev.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
