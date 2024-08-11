/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'api.dicebear.com'],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;