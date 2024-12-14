export function _getVisibleItems(totalItems, search, current, maxItems) {
    const partialMatch = (searchTerm, content) => {
        const searchWords = searchTerm.toLowerCase().split(/\s+/)
        const contentWords = content.toLowerCase().split(/\s+/)

        return searchWords.some(searchWord =>
            contentWords.some(contentWord =>
                contentWord.includes(searchWord) || searchWord.includes(contentWord)
            )
        )
    }

    const filteredItems = totalItems.filter((item) =>
        !search ||
        search.trim().length === 0 ||
        (item.content.name && partialMatch(search, item.content.name)) ||
        (item.content.title && partialMatch(search, item.content.title)) ||
        (item.content.byline?.[0]?.name && partialMatch(search, item.content.byline[0].name)) ||
        (item.content.category?.name && partialMatch(search, item.content.category.name))
    )

    const visibleItems = filteredItems.slice(
        (current - 1) * maxItems,
        current * maxItems
    )

    return { filteredItems, visibleItems }
}