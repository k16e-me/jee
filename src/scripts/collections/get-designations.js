import { useStoryblokApi } from '@storyblok/astro'

const api = useStoryblokApi()

export default async function _getDesignations() {
    return await api.get('cdn/stories', {
        starts_with: 'designations/',
        version: 'published',
        is_startpage: false,
    })
}