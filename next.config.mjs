/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // Habilita la exportación estática
  images: {
    unoptimized: true,   // Obligatorio para GitHub Pages
  },
  basePath: '/estudiosapp', // Descomenta y pon el nombre de tu repo si no es un dominio personalizado
};

export default nextConfig;