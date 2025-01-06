import { useStoryblokApi } from '@storyblok/astro'

const api = useStoryblokApi()

export async function _getCategories() {
    return await api.get('cdn/stories', {
        starts_with: 'category/',
        version: 'published',
        is_startpage: false,
    })
}