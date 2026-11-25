/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // All images are served from /public — no external hostnames needed.
    // remotePatterns left empty; unoptimized flag allows static export if needed.
    unoptimized: false,
  },
};
module.exports = nextConfig;
