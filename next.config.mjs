/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;
