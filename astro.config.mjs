import { defineConfig } from 'astro/config'
import netlify from '@astrojs/netlify'
import { loadEnv } from 'vite'
import { storyblok } from '@storyblok/astro'
import pagefind from 'astro-pagefind'
import tailwindcss from '@tailwindcss/vite'

const env = loadEnv('', process.cwd(), 'STORYBLOK_TOKEN')

export default defineConfig({
    site: 'https://jee.k16e.com',
    prefetch: {
        prefetchAll: true
    },
    adapter: netlify({
        imageCDN: false,
        cacheOnDemandPages: true,
    }),
    image: {
        domains: ['a.storyblok.com']
    },
    integrations: [
        pagefind(),
        storyblok({
            accessToken: env.STORYBLOK_TOKEN,
            livePreview: false,
            bridge: false,
            apiOptions: {
                cache: { clear: 'auto', type: 'memory' },
            },
            components: {
                // Types/Templates
                page: 'types/Page',
                person: 'types/Person',
                insight: 'types/Insight',
                event: 'types/Event',
                practice: 'types/Practice',
                sector: 'types/Sector',
                ip: 'types/Ip',

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
                stackDownload: 'composites/sections/StackDownload',
                stackHighlights: 'composites/sections/StackHighlights',
                carouselValues: 'composites/sections/CarouselValues',
                carouselPeople: 'composites/sections/CarouselPeople',
                imageGridQuotes: 'composites/sections/ImageGridQuotes',
                sectionOpenPositions: 'composites/sections/SectionOpenPositions',
                sectionLongform: 'composites/sections/SectionLongform',
                sectionImpacts: 'composites/sections/SectionImpacts',
                sectionSuccesses: 'composites/sections/SectionSuccesses',
                sectionDistribution: 'composites/sections/SectionDistribution',
                distributionAccordion: 'composites/sections/DistributionAccordion',
                distributionBullets: 'composites/sections/DistributionBullets',
                distributionMulticol: 'composites/sections/DistributionMulticol',
                videoView: 'composites/sections/VideoView',

                // Collections
                allPeople: 'composites/collections/AllPeople',
                allInsights: 'composites/collections/AllInsights',
                allEvents: 'composites/collections/AllEvents',
                allOffices: 'composites/collections/AllOffices',
                allSectors: 'composites/collections/AllSectors',
                allPractices: 'composites/collections/AllPractices',
                allAfricaExpertise: 'composites/collections/AllAfricaExpertise',
                allAfricaIp: 'composites/collections/AllAfricaIp',
            }
        })
    ],
    build: {
        format: 'preserve'
    },
    // trailingSlash: 'never',
    devToolbar: {
        enabled: false
    },
    vite: {
        build: {
            rollupOptions: {
                external: ['/pagefind/pagefind.js']
            }
        },
        optimizeDeps: {
            exclude: ['pagefind']
        },
        plugins: [tailwindcss()]
    }
})