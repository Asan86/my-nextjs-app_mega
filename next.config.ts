/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true, // GitHub Pages не поддерживает image optimization
  },
  basePath: "/my-nextjs-app_mega", // Укажите имя репозитория
  assetPrefix: "/my-nextjs-app_mega/",
};

export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
