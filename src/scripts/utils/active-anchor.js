import { _ql, _q } from '@scripts/snips'
import _slugify from '@scripts/slugify'
import _siblings from '@scripts/siblings'
import { _empty } from '@scripts/utils/empty'

export function _activeAnchor() {
    if (!_q('[data-anchor]')) return

    const navA = _ql('[data-anchor]')
    const currLoc = _slugify(location.pathname)
    const parent = location.pathname.split('/')[1]
    const activeA = navA.filter(a => (a.dataset.anchor === currLoc || parent.startsWith(a.dataset.anchor)))

    if (!_empty(activeA)) {
        navA.map(a => a.classList.remove('active'))
        activeA.map(a => a.classList.add('active'))
    } else {
        navA.map(a => a.classList.remove('active'))
    }
}