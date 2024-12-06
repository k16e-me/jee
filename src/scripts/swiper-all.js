import {
    _q,
} from './snips'
import Swiper from 'swiper'
import { Navigation, Autoplay, Keyboard, Mousewheel } from 'swiper/modules'

export default function _swiperAll() {
    if (!_q('.swiper-all')) return

    const swiper = new Swiper('.swiper-all', {
        modules: [Navigation, Autoplay, Mousewheel],
        slidesPerView: 'auto',
        spaceBetween: 16,
        freeMode: true,
        keyboard: {
            enabled: true
        },
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev'
        },
        mousewheel: {
            enabled: true,
            forceToAxis: true
        },
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            768: {
                spaceBetween: 24
            },
            960: {
                spaceBetween: 32
            }
        }
    })
}