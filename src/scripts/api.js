import { useStoryblokApi } from '@storyblok/astro'

const api = useStoryblokApi()
const currentYear = new Date().getFullYear()
const lastYear = currentYear - 1

export const getSettings = async () => {
    return await api.get('cdn/stories/settings', {
        version: 'published',
        resolve_links: 'url',
        resolve_relations: ['settings.awards', 'settings.links', 'settings.socials'],
    })
}
export const getOffices = async () => {
    return await api.get('cdn/stories', {
        starts_with: 'offices/',
        version: 'published',
        is_startpage: false,
        sort_by: 'content.order:asc',
        resolve_links: 'url',
        resolve_relations: ['office.contacts'],
    })
}
export const getSectors = async () => {
    return await api.get('cdn/stories', {
        starts_with: 'sectors/',
        version: 'published',
        is_startpage: false,
        resolve_links: 'url',
        sort_by: 'content.title:asc',
    })
}
export const getPractices = async () => {
    return await api.get('cdn/stories', {
        starts_with: 'practices/',
        version: 'published',
        is_startpage: false,
        resolve_links: 'url',
        per_page: 50,
        sort_by: 'content.title:asc',
    })
}
export const getAfricaExpertise = async () => {
    return await api.get('cdn/stories', {
        starts_with: 'africa-expertise/',
        version: 'published',
        is_startpage: false,
        resolve_links: 'url',
        sort_by: 'content.title:asc',
    })
}

export const _getAllAPIs = () => {
    return [getSettings, getOffices, getSectors, getPractices, getAfricaExpertise]
}