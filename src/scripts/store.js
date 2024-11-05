import { atom } from 'nanostores'
import { persistentAtom } from '@nanostores/persistent'

export const
    _awards = atom([]),
    _people = atom([]),
    _designations = atom([]),
    _offices = atom([])


export function _addAwards(item) { _awards.set(item) }
export function _addPeople(item) { _people.set(item) }
export function _addDesignations(item) { _designations.set(item) }
export function _addOffices(item) { _offices.set(item) }