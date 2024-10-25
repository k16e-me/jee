import {
    _q,
} from './snips'
import Swiper from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
// import 'swiper/css/navigation'

export default function _swiperAwards() {
    if (!_q('.swiper-awards')) return

    const swiper = new Swiper('.swiper-awards', {
        modules: [Navigation, Autoplay],
        navigation: {
            nextEl: '.swiper-next'
        },
        mousewheel: true,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            320: {
                slidesPerView: 4,
                spaceBetween: 16
            },
            576: {
                slidesPerView: 5,
                spaceBetween: 24
            },
            768: {
                slidesPerView: 6,
                spaceBetween: 32
            },
            960: {
                slidesPerView: 5,
                spaceBetween: 32
            },
            1200: {
                slidesPerView: 7,
                spaceBetween: 32
            }
        }
    })
}