/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fqv8rvyjsbwndp7i.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cititex.com",
      },
      {
        protocol: "https",
        hostname: "www.fanindoelectronic.com",
      },
      {
        protocol: "https",
        hostname: "ls6iibytsc.eu.scalesta-cdn.com",
      },
      {
        protocol: "https",
        hostname: "ltindonesia.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
