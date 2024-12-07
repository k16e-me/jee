import {
    _shim, _setShim, _unsetShim
} from './store'
import { _q, _ql } from './snips'

export default function _shimFx() {
    const
        body = document.body,
        shim = _q('[data-shim]'),
        on = () => {
            shim.classList.remove('opacity-0', 'invisible')
            shim.classList.add('opacity-40')
            body.style.overflow = 'hidden'
        },
        off = () => {
            shim.classList.add('opacity-0')
            shim.classList.remove('opacity-40')
            setTimeout(() => shim.classList.add('invisible'), 500)
            body.style.overflow = ''
            _unsetShim()
        }

    _shim.subscribe(v => v ? on() : off())
    shim.addEventListener('click', off)
}