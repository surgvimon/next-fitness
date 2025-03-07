import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    // formats: ['image/webp']
    domains: [
      "images.unsplash.com",
      "unsplash.com",
      "freepik.com",
      "localhost.com",
    ],
    disableStaticImages: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        //   pathname: '**',
      },
    ],
  },
};

export default nextConfig;
