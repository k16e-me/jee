import {
    _q,
} from './snips'
import Swiper from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'

export default function _swiperAll() {
    if (!_q('.swiper-all')) return

    const swiper = new Swiper('.swiper-all', {
        modules: [Navigation, Autoplay],
        slidesPerView: 'auto',
        spaceBetween: 12,
        freeMode: true,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev'
        },
        mousewheel: true,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            768: {
                spaceBetween: 16
            },
            960: {
                spaceBetween: 24
            }
        }
    })
}