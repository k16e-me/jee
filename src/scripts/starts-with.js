export default function _startsWith(s, a) {
    return a.some(i => s.toLowerCase().startsWith(i.toLowerCase()))
}