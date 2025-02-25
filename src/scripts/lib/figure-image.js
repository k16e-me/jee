import { _empty } from '../utils/empty'
import { _ql, _q } from '../snips'

export function _figureImg() {
    if (!_q('p > img')) return
    _ql('p > img').forEach(i => {
        const figure = document.createElement('figure')
        const p = i.parentNode

        figure.setAttribute('class', 'mx-[calc(-50vw+50%)] lg:ml-0 lg:mr-[calc(-50vw+75%)]')
        figure.innerHTML = `
            <img src="${i.src}"/>
            <figcaption class="bg-(--color-bg-default-elevated) block px-4 py-4 m-0 text-[var(--color-text-title)]">
                ${i.title}
            </figcaption>
        `
        p.replaceWith(figure)
    })
}