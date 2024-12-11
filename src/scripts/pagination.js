export function _paginateLink(baseURL, current) {
    const url = new URL(baseURL)
    url.searchParams.set('page', current)

    return url.toString()
}