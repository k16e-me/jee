import { _ql, _q } from '@scripts/snips'


export default function _scrollspy() {
    if (!_q('[data-spy-sections]')) return

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