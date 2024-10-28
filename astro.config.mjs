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
                page: 'types/Page',

                // Posters
                feature: 'composites/posters/Feature',
                graphic: 'composites/posters/Graphic',
                illustration: 'composites/posters/Illustration',
                intro: 'composites/posters/Intro',
                keynote: 'composites/posters/Keynote',
                product: 'composites/posters/Product',
                speakers: 'composites/posters/Speakers',

                // Headers
                headerBasic: 'composites/headers/HeaderBasic',
                headerImage: 'composites/headers/HeaderImage',
                headerImageExpressive: 'composites/headers/HeaderImageExpressive',
                headerPersonnel: 'composites/headers/HeaderPersonnel',

                // Sections
                imageHangingText: 'composites/sections/ImageHangingText',
                imageHangingInsight: 'composites/sections/ImageHangingInsight',
                sectionBentobox: 'composites/sections/SectionBentobox',
                sectionCtaClosing: 'composites/sections/SectionCtaClosing',
                fluidQuotes: 'composites/sections/FluidQuotes',
            }
        })
    ],
    image: {
        domains: ['a.storyblok.com']
    },
    build: {
        format: 'preserve'
    },
    devToolbar: {
        enabled: false
    }
})