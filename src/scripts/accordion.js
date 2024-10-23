import _siblings from './siblings'
import { _ql, _q } from './snips'

export default function _active() {
    if (!_q('.accordion')) return

    const
        menus = _ql('.accordion')

    menus.forEach(menu => {
        const
            trigger = _q('.accordion__button', menu),
            icon = _q('.accordion__icon', menu),
            content = _q('.accordion__content', menu)

        if (trigger && icon && content) {
            trigger.addEventListener('click', e => {
                if (!menu.classList.contains('active')) {
                    menu.classList.add('active')
                    trigger.setAttribute('aria-expanded', 'true')
                    content.classList.remove('hidden')
                    content.style.maxHeight =
                        content.scrollHeight + 'px'
                    icon.classList.add('rotate-180')
                } else {
                    menu.classList.remove('active')
                    trigger.setAttribute('aria-expanded', 'false')
                    content.style.maxHeight = '0px'
                    icon.classList.remove('rotate-180')
                    setTimeout(() => {
                        content.classList.add('hidden')
                    }, 250)
                }
                e.preventDefault()
                return false
            })
        }
    })
}