/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true, // GitHub Pages не поддерживает image optimization
  },
  basePath: "/your-repo-name", // Укажите имя репозитория
  assetPrefix: "/your-repo-name/",
};

export default nextConfig;





// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
