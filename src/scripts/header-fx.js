import { _q } from '@scripts/snips'
import _scroll from '@scripts/scroll'

export default function _headerFx() {
    if (!_q('[data-header]')) return

    const
        header = _q('[data-header]'),
        height = header.getBoundingClientRect().height,
        activeClasses = [
            'shadow',
            'backdrop-filter',
            'backdrop-blur-lg',
            'bg-opacity-80',
        ],
        activate = () => header.classList.add(...activeClasses),
        deactivate = () => header.classList.remove(...activeClasses),
        toggle = () => (window.scrollY > height ? activate() : deactivate())


    window.scrollY !== 0 ? activate() : deactivate()
    _scroll(toggle)
}