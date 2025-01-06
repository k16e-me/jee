import { atom } from 'nanostores'

export const excludedPaths = atom(['/legal'])
export const _hideBrandcutout = (i) => excludedPaths.get().some(j => i.startsWith(j))