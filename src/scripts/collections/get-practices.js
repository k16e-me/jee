import { useStoryblokApi } from '@storyblok/astro'

const api = useStoryblokApi()

export default async function _getPractices() {
    return await api.get('cdn/stories', {
        starts_with: 'practices/',
        version: 'published',
        is_startpage: false,
        resolve_links: 'url',
        per_page: 50,
        sort_by: 'content.title:asc',
    })
}