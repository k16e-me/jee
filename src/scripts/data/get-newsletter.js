import { useStoryblokApi } from '@storyblok/astro'

const api = useStoryblokApi()

export async function _getNewsletter() {
    return await api.get('cdn/stories/global/newsletter', {
        version: 'published',
    })
}