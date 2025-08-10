/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cdn.myanime.List.net"
            }
        ]
    }
    
};

export default nextConfig;
