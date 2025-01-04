import { atom } from 'nanostores'
import { persistentAtom } from '@nanostores/persistent'

export const
    _offices = atom([]),
    _sectors = atom([]),
    _practices = atom([]),
    _africaExpertise = atom([]),
    _settings = persistentAtom('settings', ''),
    _shim = atom(false)

export function _addOffices(item) { _offices.set(item) }
export function _addSectors(item) { _sectors.set(item) }
export function _addPractices(item) { _practices.set(item) }
export function _addAfricaExpertise(item) { _africaExpertise.set(item) }
export function _addSettings(item) { _settings.set(item) }

export function _setShim() { _shim.set(true) }
export function _unsetShim() { _shim.set(false) }