import path from "path";
import { NextConfig } from "next";
import { Configuration } from "webpack";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config: Configuration) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "@app": path.resolve(__dirname, "app"),
        "@components": path.resolve(__dirname, "components"),
        "@store": path.resolve(__dirname, "src/store"),
        "@slices": path.resolve(__dirname, "src/store/slices"),
        "@utils": path.resolve(__dirname, "utils"),
        "@hooks": path.resolve(__dirname, "hooks"),
        "@constants": path.resolve(__dirname, "constants"),
        "@data": path.resolve(__dirname, "data"),
        "@public": path.resolve(__dirname, "public"),
        "@styles": path.resolve(__dirname, "app"),
      },
    };
    return config;
  },
};

export default nextConfig;
