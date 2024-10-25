import {
    _q,
} from './snips'
import Swiper from 'swiper'
import 'swiper/css'

export default function _swiperAwards() {
    if (!_q('.swiper-awards')) return

    const swiper = new Swiper('.swiper-awards', {
        slidesPerView: 7,
        spaceBetween: 32,
        mousewheel: true,
        loop: true,
        autoplay: {
            delay: 5000,
            pauseOnMouseEnter: true,
        }
    })
}