import { useStoryblokApi } from '@storyblok/astro'

const api = useStoryblokApi()

export default async function _getAfricaExpertise() {
    return await api.get('cdn/stories', {
        starts_with: 'africa-expertise/',
        version: 'published',
        is_startpage: false,
        resolve_links: 'url',
        sort_by: 'content.title:asc',
    })
}