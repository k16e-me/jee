export function _paginateLink(baseURL, current) {
    const url = new URL(baseURL) // Create a URL object with the base URL
    url.searchParams.set('page', current) // Update the 'page' query parameter

    return url.toString() // Return the full URL as a string
}