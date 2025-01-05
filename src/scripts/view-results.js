import { _ql, _q } from '@scripts/snips'

export default function _viewResults() {
    if (!_q('[data-search-filter]')) return

    const form = _q('[data-search-filter]')
    const button = _q('button[type="submit"]', form)
    const search = _q('.local-search input')

    if (button) {
        if (search) {
            search.addEventListener('input', () => button.classList.remove('hidden'), {
                once: true,
            })
        }

        form?.addEventListener(
            'change',
            () => {
                button.classList.remove('hidden')
            },
            { once: true }
        )
    }
}