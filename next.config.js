/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    webpack: (config, context) => {
      config.resolve.symlinks = false;
      return config;
    },
  };

  return nextConfig;
};

module.exports = nextConfig;
