const path = require(`path`)
const fs = require('fs')

const packageJson = fs.readFileSync(path.resolve(__dirname, 'package.json')).toString()
const react = packageJson.match(/(?<="react": ")[^"]*/g)[0]
const next = packageJson.match(/(?<="next": ")[^"]*/g)[0]
const tailwind = packageJson.match(/(?<="tailwindcss": ")[^"]*/g)[0]

const configNext = (config) => {
    const { storage, app, locales, ...rest } = config
    const mergedConfig = {
        ...rest,
        output: 'standalone',
        env: {
            React: react,
            Next: next,
            Tailwind: tailwind
        },
        images: {
            remotePatterns: [
                {
                    hostname: storage
                }
            ],
        },
        experimental: {
            allowMiddlewareResponseBody: true,
            appDir: app || false,
        },
        reactStrictMode: true,
        swcMinify: true,
        webpack: (config) => {
            config.resolve.fallback = { fs: false }
            config.module.rules.push({
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            })
            return config;
        },
    }
    if (locales) {
        mergedConfig['i18n'] = {
            locales: locales.list,
            defaultLocale: locales.default,
            localeDetection: false,
        }
    }
    else {
        mergedConfig['i18n'] = {
            locales: ['en'],
            defaultLocale: 'en',
            localeDetection: false,
        }
    }
    return mergedConfig
}

module.exports = configNext