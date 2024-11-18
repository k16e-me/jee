import _empty from '@scripts/empty'
import { _ql, _q } from '@scripts/snips'

export default function _prefilters() {
    if (
        !_q('a') || !_q('p b')
    ) return

    if (_q('a')) _ql('a').map(a => (a.pathname === '/home' ? a.pathname = '' : false))
    if (_q('p b')) _ql('p b').map(b => (b.classList.add('text-[var(--color-text-title)]', 'font-semibold')))
}