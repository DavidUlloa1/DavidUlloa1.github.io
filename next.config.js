/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    webpack: (config, options) =>
    {
        config.module.rules.push({
            test: /\.pdf$/i,
            type: 'asset/source'
        })

        config.module.rules.push({
            test: /\.mp3$/i,
            use: {
              loader: 'file-loader',
              options: {
                publicPath: '/_next/static/sounds/',
                outputPath: 'static/sounds/',
                name: '[name].[ext]',
                esModule: false,
              },
            },
        })
        
        config.module.rules.push({
            test: /\.ogg$/i,
            use: {
              loader: 'file-loader',
              options: {
                publicPath: '/_next/static/sounds/',
                outputPath: 'static/sounds/',
                name: '[name].[ext]',
                esModule: false,
              },
            },
        })
        // config.remove.alias.canvas = false;

        return config
    },
}

module.exports = nextConfig
