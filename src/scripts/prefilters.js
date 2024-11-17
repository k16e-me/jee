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

        figure.setAttribute('class', 'mx-[calc(-50vw+50%)] lg:ml-0 lg:mr-[calc(-50vw+75%)]')
        figure.innerHTML = `
            <img src="${i.src}"/>
            <figcaption class="bg-[var(--color-bg-default-elevated)] block px-3 py-4 m-0 text-[var(--color-text-title)]">
                ${i.title}
            </figcaption>
        `
        p.replaceWith(figure)
    })
}