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
                e.preventDefault()
                let actives = _siblings(menu).filter(el => el.classList.contains('is-active'))
                if (!menu.classList.contains('is-active')) {
                    expand(menu, trigger, content, icon)
                    actives.forEach(el => {
                        const
                            trigger = _q('.accordion__button', el),
                            icon = _q('.accordion__icon', el),
                            content = _q('.accordion__content', el)
                        collapse(el, trigger, content, icon)
                    })
                } else {
                    collapse(menu, trigger, content, icon)
                }

                return false
            })
        }
    })

    function expand(menu, trigger, content, icon) {
        menu.classList.add('is-active')
        trigger.setAttribute('aria-expanded', 'true')
        content.classList.remove('hidden')
        content.style.maxHeight =
            content.scrollHeight + 'px'
        icon.classList.add('rotate-180')
    }

    function collapse(menu, trigger, content, icon) {
        menu.classList.remove('is-active')
        trigger.setAttribute('aria-expanded', 'false')
        content.style.maxHeight = '0px'
        icon.classList.remove('rotate-180')
        setTimeout(() => {
            content.classList.add('hidden')
        }, 250)
    }
}