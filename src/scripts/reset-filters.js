import { _q } from '@scripts/snips'

export function _resetFilters() {
    if (!_q('[data-reset-form]')) return

    const button = _q('[data-reset-form]')

    if (button) {
        function updateVisibility() {
            const hasSearchParams = new URLSearchParams(window.location.search).toString() !== ''
            button.style.display = hasSearchParams ? 'block' : 'none'
        }

        updateVisibility()

        window.addEventListener('popstate', updateVisibility)
    }
}