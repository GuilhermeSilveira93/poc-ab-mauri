/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'poc-abb.vercel.app',
      },
    ],
  },
};

export default nextConfig;
