import { useStoryblokApi } from '@storyblok/astro'

const api = useStoryblokApi()

export default async function _getOffices() {
    return await api.get('cdn/stories', {
        starts_with: 'offices/',
        version: 'published',
        is_startpage: false,
        sort_by: 'content.order:asc',
        resolve_links: 'url',
        resolve_relations: ['office.contacts'],
    })
}