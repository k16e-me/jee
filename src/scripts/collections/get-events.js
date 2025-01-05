import { useStoryblokApi } from '@storyblok/astro'

const api = useStoryblokApi()

export async function _getEvents() {
    return await api.getAll('cdn/stories', {
        starts_with: 'events/',
        version: 'published',
        is_startpage: false,
        sort_by: 'content.start_date:desc',
        resolve_links: 'url',
        resolve_relations: ['session.host', 'panelist.person'],
    })
}