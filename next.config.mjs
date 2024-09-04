/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
    webpack(config, options) {
        config.module.rules.push(
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                  publicPath: `/_next/static/fonts/`,
                  outputPath: 'static/fonts/',
                  esModule: false,
                },
              },
            ],
          }
        );
    
        return config;
    },

    async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*"}, // Sadece belirli kökene izin verin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    }
};

export default nextConfig;
