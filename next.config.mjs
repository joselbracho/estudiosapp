/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/estudiosapp',
  assetPrefix: '/estudiosapp', // Esto asegura que los assets (JS/CSS) busquen en la subcarpeta
};

export default nextConfig;
