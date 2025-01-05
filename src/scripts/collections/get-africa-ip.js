import { useStoryblokApi } from '@storyblok/astro'

const api = useStoryblokApi()

export async function _getAfricaIp() {
    return await api.getAll('cdn/stories', {
        starts_with: 'ip/',
        version: 'published',
        is_startpage: false,
        resolve_links: 'url',
        sort_by: 'content.title:asc',
        per_page: 100,
    })
}