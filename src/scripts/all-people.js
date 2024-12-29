import { useStoryblokApi } from '@storyblok/astro'

const api = useStoryblokApi()

export default async function _getPeople() {
    return await api.getAll('cdn/stories', {
        starts_with: 'people/',
        version: 'published',
        is_startpage: false,
        resolve_links: 'url',
        sort_by: 'content.name:asc',
        resolve_relations: ['person.byline', 'person_links.location', 'collection.collection', 'person.sectors', 'person.practices'],
    })
}