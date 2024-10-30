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
        spaceBetween: 16,
        freeMode: true,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev'
        },
        mousewheel: true,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        // breakpoints: {
        //     576: {
        //         slidesPerView: 2
        //     },
        //     768: {
        //         slidesPerView: 3,
        //         spaceBetween: 24
        //     }
        // }
    })
}