import _slugify from './slugify'

export function _getVisibleItems(totalItems, search, current, maxItems, allCategories) {
    const stemWord = (word) => {
        return word.toLowerCase().replace(/(?:s|es)$/, '')
    }

    const matchWords = (searchTerm, content) => {
        const searchWords = searchTerm.toLowerCase().split(/\s+/)
        const contentWords = content.toLowerCase().split(/\s+/)

        return searchWords.every(searchWord =>
            searchWord.length === 1
                ? contentWords.some(contentWord => contentWord.includes(searchWord))
                : contentWords.some(contentWord =>
                    stemWord(contentWord).includes(stemWord(searchWord)) ||
                    stemWord(searchWord).includes(stemWord(contentWord))
                )
        )
    }

    function filter(totalItems) {
        if (allCategories.page === 'People') {
            const { designation, practices, sectors, offices } = allCategories
            return totalItems.filter((item) => {
                // Designation (radio) filter
                if (designation && item.content.byline[0].slug !== designation) {
                    return false;
                }

                // Practices (checkbox) filter
                if (practices.length > 0 && !practices.some(practice => item.content.practices[0].collection.some(p => practices.includes(p.slug)))) {
                    return false;
                }

                // Sectors (checkbox) filter
                if (sectors.length > 0 && !sectors.some(sector => item.content.sectors[0] && item.content.sectors[0].collection.some(p => sectors.includes(p.slug)))) {
                    return false;
                }

                // Offices (checkbox) filter
                if (offices.length > 0 && !offices.some(office => offices.includes(_slugify(item.content.links[0].location.content.tag)))) {
                    return false;
                }

                return true;
            });
        }
        if (allCategories.page === 'Events') {
            const { timing, type } = allCategories;
            const date = new Date
            return totalItems.filter((item) => {
                if (timing === 'upcoming' && new Date(item.content.start_date.replace(' ', 'T')) <= new Date()) {
                    return false;
                } else if (timing === 'past' && new Date(item.content.start_date.replace(' ', 'T')) > new Date()) {
                    return false;
                }
                if (type && item.content.type !== type) {
                    return false;
                }
                return true;
            })
        }
        if (allCategories.page === 'Insights') {
            const { categories, expertise, people } = allCategories
            // Practices (checkbox) filter
            return totalItems.filter((item, index) => {
                if (categories.length > 0 && !categories.includes(_slugify(item.content.category.name))) {
                    return false;
                }
                if (expertise.length > 0 && !expertise.some(_ => item.content.expertise.some(p => expertise.includes(p.slug)))) {
                    return false;
                }
                if (people.length > 0 && !people.some(_ => item.content.author.some(p => people.includes(p.slug)))) {
                    return false;
                }
                return true
            })

        }
        return totalItems
    }
    const filteredItems = filter(totalItems)

    const searchResultsItems = filteredItems.filter((item) =>
        !search ||
        search.trim().length === 0 ||
        (item.content.name && matchWords(search, item.content.name)) ||
        (item.content.title && matchWords(search, item.content.title)) ||
        (item.content.byline?.[0]?.name && matchWords(search, item.content.byline[0].name)) ||
        (item.content.author?.[0]?.name && matchWords(search, item.content.author[0].name)) ||
        (item.content.category?.name && matchWords(search, item.content.category.name))
    )

    const visibleItems = searchResultsItems.slice(
        (current - 1) * maxItems,
        current * maxItems
    )

    return { searchResultsItems, visibleItems }
}