import _siblings from './siblings'
import { _ql, _q } from './snips'

export default function _accordion() {
    if (!_q('.accordion')) return

    const
        menus = _ql('.accordion')

    menus.forEach(menu => {
        const
            trigger = _q('.accordion__button', menu),
            icon = _q('.accordion__icon', menu),
            content = _q('.accordion__content', menu)

        trigger.addEventListener('click', e => {
            console.log(menu)
            if (!menu.classList.contains('is-active')) {
                expand(menu, trigger, content, icon)
                let actives = _siblings(menu).filter(el => el.classList.contains('is-active'))
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

            e.preventDefault()
            return false
        })
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