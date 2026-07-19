import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
  typescript: {
    tsconfigPath: "tsconfig.pages.json",
  },
};

export default nextConfig;
