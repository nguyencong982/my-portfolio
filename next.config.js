/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Bắt buộc để xuất ra file tĩnh
  basePath: '/blognguyenthecong',
  images: {
    unoptimized: true, // Bắt buộc để dùng được thẻ Image trên GitHub Pages
  },
};

export default nextConfig;