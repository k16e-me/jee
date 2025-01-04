import { useStoryblokApi } from '@storyblok/astro'

const api = useStoryblokApi()
const currentYear = new Date().getFullYear()
const lastYear = currentYear - 1

export const getSettings = async () => {
    return await api.get('cdn/stories/settings', {
        version: 'published',
        resolve_links: 'url',
        resolve_relations: ['settings.awards', 'settings.links', 'settings.socials'],
    })
}

export const _getAllAPIs = () => {
    return [getSettings]
}