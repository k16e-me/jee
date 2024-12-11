export function _getVisibleItems(totalItems, search, current, maxItems) {
    const filteredItems = totalItems.filter((item) =>
        !search || search.trim().length === 0 || (item.content.name && item.content.name.toLowerCase().includes(search.toLowerCase())) || (item.content.title && item.content.title.toLowerCase().includes(search.toLowerCase()))
    )
    const visibleItems = filteredItems.slice(
        (current - 1) * maxItems,
        current * maxItems
    )
    return { filteredItems, visibleItems }
}