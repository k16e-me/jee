import { _shim, _setShim, _unsetShim } from '@scripts/store/store'
import { _q, _ql } from '@scripts/snips'
import _trapFocus from '@scripts/trap-focus'
import _esc from '@scripts/esc'

export default function _drawer() {
    if (!_q('[data-drawer-trigger]')) return

    const
        trigger = _ql('[data-drawer-trigger]'),
        drawer = _q('[data-drawer]'),
        slots = _ql('[data-drawer-display]'),
        close = _q('[data-drawer-close]', drawer),
        search = _q('#global-search') ?? null,
        on = e => {
            const
                target = e.target,
                attr = target.getAttribute('data-display'),
                slot = slots.find(el => (el.dataset.drawerDisplay === attr))

            drawer.classList.remove('translate-x-full', 'opacity-0', 'invisible')
            drawer.classList.add('translate-x-0', 'opacity-100')

            setTimeout(() => search?.focus(), 150)

            slot.scrollTop = 0
            slot.classList.remove('sr-only')

            _trapFocus(drawer, slot)
            _setShim()
        },
        off = () => {
            drawer.classList.add('translate-x-full', 'opacity-0')
            drawer.classList.remove('translate-x-0', 'opacity-100')
            setTimeout(() => drawer.classList.add('invisible'), 350)
            slots.map(el => el.classList.add('sr-only'))

            _unsetShim()
        }

    slots.map(el => el.classList.add('sr-only'))
    trigger.map(el => el.addEventListener('click', e => on(e)))
    close.addEventListener('click', off)
    window.addEventListener('keydown', e => { _esc(e, off) })

    _shim.subscribe(v => v ? null : off())
}