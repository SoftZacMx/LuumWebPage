/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  // No personalizar webpack.watchOptions aquí: en Next 14 puede dejar chunks/CSS sin generar y provocar 404 en `/_next/static/*`.
  // Para EMFILE en macOS usa en la terminal: `ulimit -n 10240` o el script `npm run dev` (WATCHPACK_POLLING).
};

export default nextConfig;
