import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  transpilePackages: ["gsap", "lenis"],
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: true,
  },
};

export default nextConfig;
