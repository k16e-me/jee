export function createFetchStoryblokData(storyblokApi) {
    return async function fetchStoryblokData(endpoint, params = {}) {
        const defaultParams = {
            version: 'published',
            resolve_links: 'url',
            resolve_relations: [
                'block_bento_plaques.plaques',
                'image_hanging_insight.insight',
                'carousel_people.people',
                'person.byline',
                'person_links.location',
                'collection.collection',
                'section_latest.insights',
                'insight.category',
                'insight.author',
                'insight.expertise',
                'insight.suggested',
                'session.host',
                'panelist.person',
                'chairpersons.persons',
                'practice.contacts',
                'section_successes.list',
                'office.contacts',
            ],
        }

        const { data } = await storyblokApi.get(endpoint, {
            ...defaultParams,
            ...params,
        })
        return data
    }
}