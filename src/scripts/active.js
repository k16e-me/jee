import { _ql, _q } from '@scripts/snips'
import _slugify from '@scripts/slugify'
import _siblings from '@scripts/siblings'
import _empty from '@scripts/empty'

export default function _active() {
    if (!_q('[data-anchor]')) return

    const
        navA = _ql('[data-anchor]'),
        currLoc = _slugify(location.pathname),
        parent = location.pathname.split('/')[1],
        activeA = navA.filter(a => (a.dataset.anchor === currLoc || parent.startsWith(a.dataset.anchor)))
console.log(location.pathname, currLoc, parent)
    if (!_empty(activeA)) {
        navA.map(a => a.classList.remove('active'))
        activeA.map(a => a.classList.add('active'))
    } else {
        navA.map(a => a.classList.remove('active'))
    }
}