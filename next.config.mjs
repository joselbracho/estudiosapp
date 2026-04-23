/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Para dominio propio en la raíz, todo debe ser vacío o default
  basePath: '',
  trailingSlash: true,
};

export default nextConfig;
