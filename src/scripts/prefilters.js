import _empty from './empty'
import { _ql, _q } from './snips'

export default function _prefilters() {
    if (
        !_q('a') || !_q('p b')
    ) return

    if (_q('a')) _ql('a').map(a => (a.pathname === '/home' ? a.pathname = '' : false))
    if (_q('p b')) _ql('p b').map(b => (b.classList.add('text-[var(--color-text-title)]', 'font-semibold')))
    if (_q('p > img')) _ql('p > img').forEach(i => {
        const
            figure = document.createElement('figure'),
            p = i.parentNode

        figure.innerHTML = `
            <img src="${i.src}"/>
            <figcaption>${i.title}</figcaption>
        `
        p.replaceWith(figure)
    })
}