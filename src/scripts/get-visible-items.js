export function _getVisibleItems(totalItems, search, current, maxItems) {
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

    const filteredItems = totalItems.filter((item) =>
        !search ||
        search.trim().length === 0 ||
        (item.content.name && matchWords(search, item.content.name)) ||
        (item.content.title && matchWords(search, item.content.title)) ||
        (item.content.byline?.[0]?.name && matchWords(search, item.content.byline[0].name)) ||
        (item.content.author?.[0]?.name && matchWords(search, item.content.author[0].name)) ||
        (item.content.category?.name && matchWords(search, item.content.category.name))
    )

    const visibleItems = filteredItems.slice(
        (current - 1) * maxItems,
        current * maxItems
    )

    return { filteredItems, visibleItems }
}