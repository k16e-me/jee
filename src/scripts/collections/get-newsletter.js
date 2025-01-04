import { useStoryblokApi } from '@storyblok/astro'

const api = useStoryblokApi()

export default async function _getNewsletter() {
    return await api.get('cdn/stories/global/newsletter', {
        version: 'published',
    })
}