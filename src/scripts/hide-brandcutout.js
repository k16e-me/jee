import { atom } from 'nanostores'

export const excludedPaths = atom(['/legal'])

export function _hideBrandcutout(path) {
    return excludedPaths.get().some(excludedPath => path.startsWith(excludedPath))
}