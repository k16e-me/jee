import {
    _q,
    _ql,
} from './snips'

export default function _playVideo() {
    if (!_q('[r-autoplay-video]')) return

    const
        wrapper = _q('[r-autoplay-video]'),
        control = _q('[r-autoplay-video-ctrl]', wrapper)

    console.log(wrapper, control)
}