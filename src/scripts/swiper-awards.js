import {
    _q,
} from './snips'
import Swiper from 'swiper'
import 'swiper/css'

export default function _swiperAwards() {
    if (!_q('.swiper-awards')) return

    const swiper = new Swiper('.swiper-awards', {
        mousewheel: true,
        loop: true,
        autoplay: {
            delay: 5000,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 5,
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