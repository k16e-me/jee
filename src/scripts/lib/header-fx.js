import { _q } from '@scripts/snips'
import _scroll from '@scripts/scroll'

export function _headerFx() {
    if (!_q('[data-header]')) return

    const header = _q('[data-header]')
    const height = header.getBoundingClientRect().height
    const activeClasses = [
        'shadow',
        'backdrop-filter',
        'backdrop-blur-lg',
        'bg-opacity-80',
    ]
    const activate = () => header.classList.add(...activeClasses)
    const deactivate = () => header.classList.remove(...activeClasses)
    const toggle = () => (window.scrollY > height ? activate() : deactivate())

    window.scrollY !== 0 ? activate() : deactivate()
    _scroll(toggle)
}