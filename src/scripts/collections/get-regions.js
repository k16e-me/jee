import { useStoryblokApi } from '@storyblok/astro'

const api = useStoryblokApi()

export async function _getRegions() {
    return await api.getAll('cdn/stories', {
        starts_with: 'regions/',
        version: 'published',
        is_startpage: false,
        sort_by: 'content.position:asc',
        resolve_links: 'url',
        resolve_relations: ['region.offices', 'region.contacts'],
    })
}