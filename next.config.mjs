const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.myanimelist.net",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com", 
      }
    ],
  },
};

export default nextConfig
