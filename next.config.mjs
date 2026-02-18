/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MYSQL_HOST: '127.0.0.1',
        MYSQL_PORT: '3307',
        MYSQL_USER: 'root',
        MYSQL_PASSWORD: '',
        MYSQL_DATABASE: 'ebd-demo',
    },
};

export default nextConfig;