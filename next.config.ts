import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // basePath: isProd ? "/bcherek" : "",
  // assetPrefix: isProd ? "/bcherek/" : "",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  images: { unoptimized: true, },
  // publicRuntimeConfig: isProd
  //   ? {
  //       basePath: "/bcherek",
  //     }
  //   : {},
};

export default nextConfig;
