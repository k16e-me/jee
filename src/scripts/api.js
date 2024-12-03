import { useStoryblokApi } from '@storyblok/astro'

const
    api = useStoryblokApi(),
    currentYear = new Date().getFullYear(),
    lastYear = currentYear - 1

export const getSettings = async () => {
    return await api.get('cdn/stories/settings', {
        version: import.meta.env.DEV ? 'draft' : 'published',
        resolve_links: 'url',
        resolve_relations: ['settings.awards', 'settings.links', 'settings.socials'],
    })
}
export const getAwards = async () => {
    return await api.get('cdn/stories', {
        starts_with: 'awards/',
        version: import.meta.env.DEV ? 'draft' : 'published',
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
        version: import.meta.env.DEV ? 'draft' : 'published',
        is_startpage: false,
    })
}
export const getOffices = async () => {
    return await api.get('cdn/stories', {
        starts_with: 'offices/',
        version: import.meta.env.DEV ? 'draft' : 'published',
        is_startpage: false,
        sort_by: 'content.order:asc',
        resolve_links: 'url',
        resolve_relations: ['office.contacts'],
    })
}
export const getPeople = async () => {
    return await api.get('cdn/stories', {
        starts_with: 'people/',
        version: 'published',
        is_startpage: false,
        resolve_links: 'url',
        per_page: 100,
        resolve_relations: ['person.byline', 'person_links.location', 'collection.collection'],
    })
}
export const getSectors = async () => {
    return await api.get('cdn/stories', {
        starts_with: 'sectors/',
        version: import.meta.env.DEV ? 'draft' : 'published',
        is_startpage: false,
        resolve_links: 'url',
        sort_by: 'content.title:asc',
    })
}
export const getPractices = async () => {
    return await api.get('cdn/stories', {
        starts_with: 'practices/',
        version: import.meta.env.DEV ? 'draft' : 'published',
        is_startpage: false,
        resolve_links: 'url',
        per_page: 50,
        sort_by: 'content.title:asc',
    })
}
export const getAfricaExpertise = async () => {
    return await api.get('cdn/stories', {
        starts_with: 'africa-expertise/',
        version: import.meta.env.DEV ? 'draft' : 'published',
        is_startpage: false,
        resolve_links: 'url',
        sort_by: 'content.title:asc',
    })
}
export const getAfricaIp = async () => {
    return await api.get('cdn/stories', {
        starts_with: 'ip/',
        version: import.meta.env.DEV ? 'draft' : 'published',
        is_startpage: false,
        resolve_links: 'url',
        sort_by: 'content.title:asc',
    })
}
export const getInsights = async () => {
    return await api.get('cdn/stories', {
        starts_with: 'insights/',
        version: 'draft',
        is_startpage: false,
        sort_by: 'content.published_date:desc',
        resolve_links: 'url',
        per_page: 100,
        resolve_relations: ['insight.category', 'insight.author', 'insight.expertise'],
    })
}
export const getEvents = async () => {
    return await api.get('cdn/stories', {
        starts_with: 'events/',
        version: import.meta.env.DEV ? 'draft' : 'published',
        is_startpage: false,
        sort_by: 'content.start_date:desc',
        resolve_links: 'url',
        per_page: 100,
        resolve_relations: ['session.host', 'panelist.person'],
    })
}
export const getNewsletter = async () => {
    return await api.get('cdn/stories/global/newsletter', {
        version: import.meta.env.DEV ? 'draft' : 'published',
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
    return [getSettings, getAwards, getDesignations, getCategories, getOffices, getPeople, getSectors, getPractices, getAfricaExpertise, getAfricaIp, getInsights, getEvents, getNewsletter, getRegions]
}