export default function _slugify(s) {
    return s
        .replace(/^\s+|\s+$/g, '')
        .toLowerCase()
        .replace(/\/+/g, '-')
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/-+$/g, '')
        .replace(/^-+/g, '')
}