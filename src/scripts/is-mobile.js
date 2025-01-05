import { _ql, _q } from './snips'
import { _empty } from './utils/empty'

export default function _isMobile() {
    const
        mql = window.matchMedia('(min-width: 1200px)')

    matches(mql)
    mql.addEventListener('change', matches, false)

    function matches(e) {
        return e.matches ? false : true
    }
}