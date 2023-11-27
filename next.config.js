/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  rewrites: async () => [
    {
      source: "/api/user-service/",
      destination:
        process.env.NODE_ENV === "development"
          ? "http://127.0.0.1:8000/api/user-service/"
          : "/api/",
    },
    {
      source: "/api/user-service/:path*",
      destination:
        process.env.NODE_ENV === "development"
          ? "http://127.0.0.1:8000/api/user-service/:path*"
          : "/api/",
    },
    {
      source: "/api/:path*",
      destination:
        process.env.NODE_ENV === "development"
          ? "http://127.0.0.1:8000/api/:path*"
          : "/api/",
    },
  ],
};

module.exports = nextConfig;
