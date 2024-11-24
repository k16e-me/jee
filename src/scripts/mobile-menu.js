import { _q } from '@scripts/snips'

export default function _mobileMenu() {
    const
        open = _q('[data-open-menu]'),
        close = _q('[data-close-menu]'),
        drapery = _q('[data-drapery]'),
        on = () => {
            drapery.classList.remove('-translate-y-full', 'opacity-0', 'invisible', 'scale-95')
            drapery.classList.add('translate-y-0', 'opacity-100')
        },
        off = () => {
            drapery.classList.remove('translate-y-0', 'opacity-100')
            drapery.classList.add('-translate-y-full', 'opacity-0', 'scale-95')
            setTimeout(() => drapery.classList.add('invisible'), 300)
        }

    open.addEventListener('click', e => on(e))
    close.addEventListener('click', e => off(e))
}