import { _ql, _q } from '@scripts/snips'


export default function _scrollspy() {
    if (!_q('[data-spy]')) return

    const
        sectionVisibility = {},
        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                sectionVisibility[entry.target.id] = entry.intersectionRatio
            })

            const
                maxVisibility = Math.max(...Object.values(sectionVisibility)),
                [activeId, intersectionRatio] = Object
                    .entries(sectionVisibility)
                    .find(([id, visibility]) => visibility == maxVisibility)

            _ql('[data-spy-sections] a').forEach(a => {
                a.classList.remove('is-in-view')
            })
            _q(`[data-spy-sections] a[href='#${activeId}']`).classList.add('is-in-view')
        }, { threshold: [0.33, 0.66, 1] }),
        sections = _ql('[data-spy] section')

    sections.forEach(section => {
        observer.observe(section)
    })
}