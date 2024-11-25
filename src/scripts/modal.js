import { _shim, _setShim, _unsetShim } from './store'
import { _q, _ql } from './snips'

export default function _modal() {
    if (!_q('[data-modal-trigger]')) return

    const
        trigger = _ql('[data-modal-trigger]'),
        modal = _q('[data-modal]'),
        slots = _ql('[data-modal-display]'),
        close = _q('[data-modal-close]', modal),
        on = e => {
            const
                target = e.target,
                attr = target.getAttribute('data-display'),
                slot = slots.find(el => (el.dataset.modalDisplay === attr))

            modal.classList.remove('translate-y-full', 'opacity-0', 'invisible', 'scale-90')
            modal.classList.add('translate-y-0', 'opacity-100')

            slot.scrollTop = 0
            slot.classList.remove('sr-only')

            _setShim()
        },
        off = () => {
            modal.classList.remove('translate-y-0', 'opacity-100')
            modal.classList.add('translate-y-full', 'opacity-0', 'scale-90')
            setTimeout(() => modal.classList.add('invisible'), 300)
            slots.map(el => el.classList.add('sr-only'))

            _unsetShim()
        }

    slots.map(el => el.classList.add('sr-only'))
    trigger.map(el => el.addEventListener('click', e => on(e)))
    close.addEventListener('click', off)
    
    _shim.subscribe(v => v ? null : off())
}