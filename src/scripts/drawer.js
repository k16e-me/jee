import { _overlay, _setOverlay, _unsetOverlay } from './store'
import { _q, _ql } from './snips'

export default function _drawer() {
    const
        trigger = _ql('[data-drawer-trigger]'),
        drawer = _q('[data-drawer]'),
        slots = _ql('[data-drawer-display]'),
        close = _q('[data-drawer-close]', drawer),
        on = () => {
            drawer.classList.remove('translate-x-full', 'opacity-0', 'invisible', 'scale-x-95')
            drawer.classList.add('translate-x-0', 'opacity-100')
        },
        off = () => {
            drawer.classList.remove('translate-x-0', 'opacity-100')
            drawer.classList.add('translate-x-full', 'opacity-0', 'scale-x-95')
            setTimeout(() => drawer.classList.add('invisible'), 300)
            slots.map(el => el.classList.add('sr-only'))
            _unsetOverlay()
        },
        display = (e) => {
            e.preventDefault()

            const
                target = e.target,
                attr = target.getAttribute('data-display'),
                slot = slots.find(el => (el.dataset.drawerDisplay === attr))

            slot.scrollTop = 0
            slot.classList.remove('sr-only')
            _overlay.value ? _unsetOverlay() : _setOverlay()
        }

    slots.map(el => el.classList.add('sr-only'))
    trigger.map(el => el.addEventListener('click', e => display(e)))
    close.addEventListener('click', off)

    _overlay.subscribe(v => v ? on() : off())
}