import { _shim, _setShim, _unsetShim } from './store'
import { _q, _ql } from './snips'

export default function _modalVideo() {
    if (!_q('[data-modal-video-play]')) return

    const trigger = _ql('[data-modal-video-play]')
    const modal = _q('[data-modal-video]')
    const close = _q('[data-modal-close]', modal)
    const video = _q('iframe[src*="www.youtube.com"]', modal)

    const on = e => {
        const target = e.target

        modal.classList.remove('translate-y-16', 'scale-50', 'opacity-0', 'invisible')
        modal.classList.add('translate-y-0', 'opacity-100')

        video.src = video.src + (video.src.indexOf('?') < 0 ? '?' : '&') + 'autoplay=1'

        _setShim()
    }

    const off = () => {
        modal.classList.remove('translate-y-0', 'opacity-100')
        modal.classList.add('translate-y-16', 'scale-50', 'opacity-0')
        setTimeout(() => modal.classList.add('invisible'), 300)

        video.src = video.src.replace('&autoplay=1', '').replace('?autoplay=1', '')

        _unsetShim()
    }

    trigger.map(el => el.addEventListener('click', e => on(e)))
    close.addEventListener('click', off)

    _shim.subscribe(v => v ? null : off())
}