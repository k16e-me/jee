import { _q, _ql } from '@scripts/snips'

export default function _mobileMenu() {
    const
        open = _q('[data-open-menu]'),
        close = _q('[data-close-menu]'),
        drapery = _q('[data-drapery]'),
        body = document.body,
        links = _ql('a', drapery),
        on = () => {
            drapery.classList.remove('-translate-y-full', 'opacity-0', 'invisible', 'scale-95')
            drapery.classList.add('translate-y-0', 'opacity-100')
            body.style.overflow = 'hidden'
        },
        off = () => {
            drapery.classList.remove('translate-y-0', 'opacity-100')
            drapery.classList.add('-translate-y-full', 'opacity-0', 'scale-95')
            body.style.overflow = ''
            setTimeout(() => drapery.classList.add('invisible'), 300)
        }

    open.addEventListener('click', e => on(e))
    close.addEventListener('click', e => off(e))
    links.forEach(i => i.addEventListener('click', e => off(e)))
}