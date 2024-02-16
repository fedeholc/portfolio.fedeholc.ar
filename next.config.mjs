/** @type {import('next').NextConfig} */
const nextConfig = {};

export const images = {
  dangerouslyAllowSVG: true,
  contentDispositionType: "attachment",
  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  webpack: (config) => {
    // Asegúrate de tener este código presente
    config.resolve.alias["@public"] = path.join(__dirname, "public");

    return config;
  },
};
export default nextConfig;
