import { useStoryblokApi } from '@storyblok/astro'

const api = useStoryblokApi()

export default async function _getSettings() {
    return await api.get('cdn/stories/settings', {
        version: 'published',
        resolve_links: 'url',
        resolve_relations: ['settings.awards', 'settings.links', 'settings.socials'],
    })
}