import { useStoryblokApi } from '@storyblok/astro'

const api = useStoryblokApi()

export default async function _getSectors() {
    return await api.get('cdn/stories', {
        starts_with: 'sectors/',
        version: 'published',
        is_startpage: false,
        resolve_links: 'url',
        sort_by: 'content.title:asc',
    })
}