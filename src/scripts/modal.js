import { _overlay, _setOverlay, _unsetOverlay } from './store'
import { _q, _ql } from './snips'

export default function _modal() {
    if (!_q('[data-modal-trigger]')) return

    const
        trigger = _ql('[data-modal-trigger]'),
        modal = _q('[data-modal]'),
        slots = _ql('[data-modal-display]'),
        close = _q('[data-modal-close]', modal),
        on = () => {
            modal.classList.remove('translate-y-full', 'opacity-0', 'invisible')
            modal.classList.add('translate-y-0', 'opacity-100')
        },
        off = () => {
            modal.classList.remove('translate-y-0', 'opacity-100')
            modal.classList.add('translate-y-full', 'opacity-0')
            setTimeout(() => modal.classList.add('invisible'), 300)
            slots.map(el => el.classList.add('sr-only'))
            _unsetOverlay()
        },
        display = (e) => {
            e.preventDefault()

            const
                target = e.target,
                attr = target.getAttribute('data-display'),
                slot = slots.find(el => (el.dataset.modalDisplay === attr))

            slot.scrollTop = 0
            slot.classList.remove('sr-only')
            _overlay.value ? _unsetOverlay() : _setOverlay()
        }

    slots.map(el => el.classList.add('sr-only'))
    trigger.map(el => el.addEventListener('click', e => display(e)))
    close.addEventListener('click', off)

    _overlay.subscribe(v => v ? on() : off())
}