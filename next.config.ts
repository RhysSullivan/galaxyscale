import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        has: [{ type: "cookie", key: "session" }],
        destination: "/dynamic/cookie-present",
      },
      {
        source: "/",
        destination: "/dynamic/cookie-missing",
      },
    ];
  },
};

export default nextConfig;
