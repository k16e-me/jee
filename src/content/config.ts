import { storyblokLoader } from '@storyblok/astro'
import { defineCollection } from 'astro:content'

const storyblokCollection = defineCollection({
    loader: storyblokLoader({
        accessToken: import.meta.env.STORYBLOK_TOKEN,
        apiOptions: {
            resolveNestedRelations: true,
        },
        version: 'published',
    }),
})

export const collections = {
    storyblok: storyblokCollection,
}