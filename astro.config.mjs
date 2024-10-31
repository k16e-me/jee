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
                // Types/Templates
                page: 'types/Page',
                person: 'types/Person',
                event: 'types/Event',
                insight: 'types/Insight',

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
                sectionStack: 'composites/sections/SectionStack',
                sectionLatest: 'composites/sections/SectionLatest',
                fluidQuotes: 'composites/sections/FluidQuotes',
                fluidImage: 'composites/sections/FluidImage',
                wrapper: 'composites/sections/Wrapper',
                stackHighlights: 'composites/sections/StackHighlights',
                carouselValues: 'composites/sections/CarouselValues',
                carouselPeople: 'composites/sections/CarouselPeople',

                // Collections
                allPeople: 'composites/collections/AllPeople',
                allInsights: 'composites/collections/AllInsights',
                allEvents: 'composites/collections/AllEvents',
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