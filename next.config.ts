import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.nare-dent.ru" }],
        destination: "https://nare-dent.ru/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
