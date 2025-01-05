export function _formatDate(d) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const day = new Date(d)

    return day.toLocaleDateString('en-GB', options)
}