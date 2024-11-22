import {
    _overlay, _setOverlay, _unsetOverlay
} from './store'
import { _q, _ql } from './snips'

export default function _shim() {
    if (!_q('[data-shim]')) return

    const
        body = document.body,
        shim = _q('[data-shim]'),
        on = () => {
            shim.classList.remove('opacity-0', 'invisible')
            shim.classList.add('opacity-50')
            body.style.overflow = 'hidden'
        },
        off = () => {
            shim.classList.add('opacity-0')
            shim.classList.remove('opacity-50')
            setTimeout(() => shim.classList.add('invisible'), 500)
            body.style.overflow = ''
            _unsetOverlay()
        }

    _overlay.subscribe(v => v ? on() : off())
    shim.addEventListener('click', off)
}