import {
    _q,
} from './snips'
import Swiper from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'

export default function _swiperQuotes() {
    if (!_q('.swiper-quotes')) return

    const swiper = new Swiper('.swiper-quotes', {
        modules: [Navigation, Autoplay],
        navigation: {
            nextEl: '.swiper-next'
        },
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }
    })
}