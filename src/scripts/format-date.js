export default function _formatDate(d) {
    const
        options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
        day = new Date(d)

    return day.toLocaleDateString('en-GB', options)
}