import { atom } from 'nanostores'

export const _shim = atom(false)

export function _setShim() { _shim.set(true) }
export function _unsetShim() { _shim.set(false) }