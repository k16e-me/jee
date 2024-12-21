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
export const getAwards = async () => {
    return await api.get('cdn/stories', {
        starts_with: 'awards/',
        version: 'published',
        by_slugs: [`awards/${currentYear}/*`, `awards/${lastYear}/*`],
        level: 3,
        is_startpage: false,
    })
}
export const getDesignations = async () => {
    return await api.get('cdn/stories', {
        starts_with: 'designations/',
        version: 'published',
        is_startpage: false,
    })
}
export const getCategories = async () => {
    return await api.get('cdn/stories', {
        starts_with: 'category/',
        version: 'published',
        is_startpage: false,
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
export const getOpenings = async () => {
    return await api.get('cdn/stories', {
        starts_with: 'openings/',
        version: 'published',
        is_startpage: false,
        resolve_links: 'url',
    })
}
export const getPeople = async () => {
    return await api.getAll('cdn/stories', {
        starts_with: 'people/',
        version: 'published',
        is_startpage: false,
        resolve_links: 'url',
        sort_by: 'content.name:asc',
        resolve_relations: ['person.byline', 'person_links.location', 'collection.collection', 'person.sectors', 'person.practices'],
    })
}
export const getInsights = async () => {
    return await api.getAll('cdn/stories', {
        starts_with: 'insights/',
        version: 'published',
        is_startpage: false,
        sort_by: 'content.published_date:desc',
        resolve_links: 'url',
        resolve_relations: ['insight.category', 'insight.author', 'insight.expertise'],
    })
}
export const getEvents = async () => {
    return await api.getAll('cdn/stories', {
        starts_with: 'events/',
        version: 'published',
        is_startpage: false,
        sort_by: 'content.start_date:desc',
        resolve_links: 'url',
        resolve_relations: ['session.host', 'panelist.person'],
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
export const getAfricaIp = async () => {
    return await api.get('cdn/stories', {
        starts_with: 'ip/',
        version: 'published',
        is_startpage: false,
        resolve_links: 'url',
        sort_by: 'content.title:asc',
        per_page: 100,
    })
}
export const getNewsletter = async () => {
    return await api.get('cdn/stories/global/newsletter', {
        version: 'published',
    })
}
export const getRegions = async () => {
    return await api.get('cdn/stories', {
        starts_with: 'regions/',
        version: 'published',
        is_startpage: false,
        sort_by: 'content.position:asc',
        resolve_links: 'url',
        resolve_relations: ['region.offices', 'region.contacts'],
    })
}

export const _getAllAPIs = () => {
    return [getSettings, getAwards, getDesignations, getCategories, getOffices, getOpenings, getPeople, getInsights, getEvents, getSectors, getPractices, getAfricaExpertise, getAfricaIp, getNewsletter, getRegions]
}