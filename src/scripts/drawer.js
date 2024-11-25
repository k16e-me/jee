import { _shim, _setShim, _unsetShim } from './store'
import { _q, _ql } from './snips'

export default function _drawer() {
    if (!_q('[data-drawer-trigger]')) return

    const
        trigger = _ql('[data-drawer-trigger]'),
        drawer = _q('[data-drawer]'),
        slots = _ql('[data-drawer-display]'),
        close = _q('[data-drawer-close]', drawer),
        on = e => {
            const
                target = e.target,
                attr = target.getAttribute('data-display'),
                slot = slots.find(el => (el.dataset.drawerDisplay === attr))

            drawer.classList.remove('translate-x-full', 'opacity-0', 'scale-90')
            drawer.classList.add('translate-x-0', 'opacity-100')

            slot.scrollTop = 0
            slot.classList.remove('sr-only')

            _setShim()
        },
        off = () => {
            drawer.classList.remove('translate-x-0', 'opacity-100')
            drawer.classList.add('translate-x-full', 'opacity-0', 'scale-90')
            // setTimeout(() => drawer.classList.add('invisible'), 250)
            slots.map(el => el.classList.add('sr-only'))

            _unsetShim()
        }

    slots.map(el => el.classList.add('sr-only'))
    trigger.map(el => el.addEventListener('click', e => on(e)))
    close.addEventListener('click', off)

    _shim.subscribe(v => v ? null : off())
}