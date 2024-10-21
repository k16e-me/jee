import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'

const env = loadEnv('', process.cwd(), 'STORYBLOK')

export default defineConfig({
    site: 'https://jee-v2.k16e.co',
    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'viewport',
        ignoreSlowConnection: true
    },
    integrations: [
        tailwind({
            nesting: true
        }),
        storyblok({
            accessToken: env.STORYBLOK_TOKEN,
            livePreview: false,
            bridge: import.meta.env.DEV,
            components: {
                page: 'types/Page'
            }
        })
    ],
    image: {
        domains: ['a.storyblok.com']
    },
    build: {
        format: 'preserve'
    }
})