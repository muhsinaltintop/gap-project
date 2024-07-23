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
};

export default nextConfig;
