export default function _empty(v) {
    if (v.length === 0) return true
    return (
        v === undefined ||
        v === null ||
        (typeof v === "object" && Object.keys(v).length === 0) ||
        (typeof v === "string" && v.trim().length === 0)
    )
}