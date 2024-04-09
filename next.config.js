/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    webpack: (config, options) =>
    {
        config.module.rules.push({
            test: /\.pdf$/i,
            type: 'asset/source'
        })
        // config.remove.alias.canvas = false;

        return config
    },
}

module.exports = nextConfig
