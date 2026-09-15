/** @type {import('next').NextConfig} */
const nextConfig = {
  // Xuất web thành file tĩnh (deploy Cloudflare Pages / GitHub Pages / Vercel đều được)
  output: "export",
  // Static export không có server tối ưu ảnh — nhớ nén ảnh trước khi bỏ vào public/images/
  images: { unoptimized: true },
};

export default nextConfig;
