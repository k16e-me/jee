import { atom } from 'nanostores'
import { persistentAtom } from '@nanostores/persistent'

export const
    _awards = atom([])
    
export function _addAwards(item) { _awards.set(item) }