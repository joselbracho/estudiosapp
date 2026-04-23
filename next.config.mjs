/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Si usas un dominio propio, borra '/estudiosapp' y deja solo ''
  basePath: '/estudiosapp', 
  
  // Agregamos esto para asegurar que Next.js genere las rutas de archivos correctamente
  trailingSlash: true, 
};

export default nextConfig;
