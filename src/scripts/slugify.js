export default function _slugify(s) {
    // if (s == null || s == undefined || s == '') return
    return s
        .replace(/^\s+|\s+$/g, '')
        .toLowerCase()
        .replace(/\/+/g, '-')
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/-+$/g, '')
}