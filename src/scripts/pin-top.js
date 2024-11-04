import { _ql } from '@scripts/snips'


export default function _isPinned() {
    const
        stickies = _ql('[data-pin-top]'),
        observer = new IntersectionObserver(
        ([e]) => e.target.classList.toggle('is-pinned', e.intersectionRatio < 1),
            { threshold: [1] }
        )

    stickies.forEach(el => {
        observer.observe(el)
    })
}