import { _ql, _q } from './snips'
import _empty from './empty'

export default function _moreOrLess() {
    if (!_q('.is-more-less')) return

    const
        fullContent = _q('.is-more-less'),
        paragraphs = _ql('.is-more-less p:nth-child(2) ~ p'),
        paraWrap = document.createElement('div'),
        button = document.createElement('button')

    paraWrap.setAttribute('class', 'show-more-less')
    button.setAttribute('type', 'button')
    button.textContent = '...more'

    paragraphs.forEach(p => paraWrap.appendChild(p))

    fullContent.appendChild(paraWrap)
    fullContent.appendChild(button)

    collapse()
    paraWrap.style.transition = 'height 0.2s ease-out'

    button.addEventListener('click', () => paraWrap.style.height === '0px' ? expand() : collapse())

    function getHeight(el) {
        const height = `${el.scrollHeight}px`
        return height
    }

    function collapse() {
        paraWrap.style.height = '0px'
        paraWrap.style.overflow = 'hidden'
    }

    function expand() {
        paraWrap.style.height = getHeight(paraWrap)
        paraWrap.style.overflow = 'auto'
        paraWrap.addEventListener('transitionend', () => button.textContent = '...less', false)
    }
}