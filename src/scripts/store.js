import { atom } from 'nanostores'
import { persistentAtom } from '@nanostores/persistent'

export const
    _awards = atom([]),
    _people= atom([]),
    _designtions= atom([])


export function _addAwards(item) { _awards.set(item) }
export function _addPeople(item) { _people.set(item) }
export function _addDesignations(item) { _designtions.set(item) }