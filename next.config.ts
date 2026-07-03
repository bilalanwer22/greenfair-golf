import type { NextConfig } from "next";

const cmsUrl = process.env.WP_CMS_URL ?? "https://dev2.brandrapdev.co/coriescafe";

let cmsHostname = "localhost";
try {
  cmsHostname = new URL(cmsUrl).hostname;
} catch {
  // Keep localhost default.
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: cmsHostname,
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: cmsHostname,
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
