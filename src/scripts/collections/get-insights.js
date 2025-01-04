import { useStoryblokApi } from '@storyblok/astro'

const api = useStoryblokApi()

export default async function _getInsights() {
    return await api.getAll('cdn/stories', {
        starts_with: 'insights/',
        version: 'published',
        is_startpage: false,
        sort_by: 'content.published_date:desc',
        resolve_links: 'url',
        resolve_relations: ['insight.category', 'insight.author', 'insight.expertise'],
    })
}