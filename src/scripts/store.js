import { atom } from 'nanostores'
import { persistentAtom } from '@nanostores/persistent'

export const
    _settings = persistentAtom('settings', ''),
    _shim = atom(false)

export function _addSettings(item) { _settings.set(item) }

export function _setShim() { _shim.set(true) }
export function _unsetShim() { _shim.set(false) }