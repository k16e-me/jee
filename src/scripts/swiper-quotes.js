import {
    _q,
} from './snips'
import Swiper from 'swiper'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function _swiperQuotes() {
    if (!_q('.swiper-quotes')) return

    const swiper = new Swiper('.swiper-quotes', {
        modules: [Navigation, Autoplay, Pagination],
        navigation: {
            nextEl: '.swiper-next'
        },
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }
    })
}