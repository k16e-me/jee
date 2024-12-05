import { getCollection } from 'astro:content'

Array.prototype.filterStories = function ({ content_type, full_slug, ids }) {
    return this.filter((story) => {
        if (content_type && story.data.content.component !== content_type)
            return false
        if (full_slug && !story.full_slug.startsWith(full_slug)) return false
        if (ids && !ids.includes(story.id)) return false
        return true
    })
}

export const allStories = await getCollection('storyblok')

// People
export const getPeopleData = async function () {
    return allStories
        .filter((item) => item.data.content.component === 'person')
        .map((item) => {
            return {
                ...item.data,
                content: {
                    ...item.data.content,
                    byline: allStories
                        .filterStories({ ids: item.data?.content?.byline })
                        ?.map((byline) => byline.data),
                    links: item.data.content.links.map((link) => {
                        return {
                            ...link,
                            location: allStories
                                .filterStories({ ids: link.location })
                                ?.map((location) => location.data),
                        }
                    }),
                    sectors: item.data.content.sectors.map((sector) => {
                        return {
                            ...sector,
                            collection: allStories
                                .filterStories({ ids: sector.collection })
                                ?.map((collection) => collection.data),
                        }
                    }),
                },
            }
        })
}

// Insights
export const getInsightsData = async function () {
    return allStories
        .filter((item) => item.data.content.component === 'insight')
        .map((item) => {
            return {
                ...item.data,
                content: {
                    ...item.data.content,
                    suggested: allStories
                        .filterStories({ ids: item.data?.content?.suggested })
                        ?.map((suggested) => suggested.data),

                    categories: allStories
                        .filterStories({ ids: item.data?.content?.category })
                        ?.map((category) => category.data),

                    author: allStories
                        .filterStories({ ids: item.data?.content?.author })
                        ?.map((author) => author.data),

                    expertise: allStories
                        .filterStories({ ids: item.data?.content?.expertise })
                        ?.map((expertise) => expertise.data),
                },
            }
        })
        .sort(
            (a, b) =>
                new Date(b.content.published_date) - new Date(a.content.published_date)
        )
}

// Events
export const getEventsData = async function () {
    return allStories
        .filter((item) => item.data.content.component === 'event')
        .sort(
            (a, b) =>
                new Date(b.data.content.start_date) -
                new Date(a.data.content.start_date)
        )
        .map((item) => item.data)
}


// Regions
export const getRegionsData = async function () {
    return allStories
        .filter((item) => item.data.content.component === 'region')
        .map((item) => {
            return {
                ...item.data,
                content: {
                    ...item.data.content,
                    offices: allStories
                        .filterStories({ ids: item.data?.content?.offices })
                        .map((office) => office.data),
                    contacts: allStories
                        .filterStories({ ids: item.data?.content?.contacts })
                        .map((contact) => contact.data),
                },
            }
        })
}

// Newsletter
export const getNewsletterData = async function () {
    return allStories
        .filter((item) => item.data.slug === 'newsletter')
        .map((item) => item.data)
        .pop()
}

// Settings
export const getSettingsData = async function () {
    return allStories
        .filter((item) => item.data.content.component === 'settings')
        .map((item) => {
            return {
                ...item.data,
                content: {
                    ...item.data.content,
                    awards: allStories
                        .filterStories({ ids: item.data?.content?.awards })
                        ?.map((award) => award.data),

                    socials: allStories
                        .filterStories({ ids: item.data?.content?.socials })
                        ?.map((social) => social.data),
                },
            }
        })
        .pop()
}

// Awards
export const getAwardsData = async function () {
    return allStories
        .filter((item) => item.data.content.component === 'award')
        .map((item) => item.data)
}

// Designations
export const getDesignationsData = async function () {
    return allStories
        .filter((item) => item.data.content.component === 'designation')
        .map((item) => item.data)
}

// Categories
export const getCategoriesData = async function () {
    return allStories
        .filter((item) => item.data.content.component === 'category')
        .map((item) => item.data)
}

// Offices
export const getOfficesData = async function () {
    return allStories
        .filter((item) => item.data.content.component === 'office')
        .sort((a, b) => a.data.content.order - b.data.content.order)
        .map((item) => {
            return {
                ...item.data,
                content: {
                    ...item.data.content,
                    contacts: allStories
                        .filterStories({ ids: item.data?.content?.contacts })
                        .map((contact) => contact.data),
                },
            }
        })
}

// Sectors
export const getSectorsData = async function () {
    return allStories
        .filter((item) => item.data.content.component === 'sector')
        .sort((a, b) => a.data.content.title.localeCompare(b.data.content.title))
        .map((item) => item.data)
}

// Practices
export const getPracticesData = async function () {
    return allStories
        .filter((item) => item.data.content.component === 'practice')
        .sort((a, b) => a.data.content.title.localeCompare(b.data.content.title))
        .map((item) => item.data)
}

// Africa Expertise
export const getAfricaExpertiseData = async function () {
    return allStories
        .filter(
            (item) =>
                item.data.full_slug.startsWith('africa-expertise/') &&
                item.data.content.component === 'practice'
        )
        .sort((a, b) => a.data.content.title.localeCompare(b.data.content.title))
        .map((item) => item.data)
}