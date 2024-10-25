import {
    _q,
} from './snips'
import Glide from '@glidejs/glide'

export default function _carouselAwards() {
    if (!_q('.carousel-plaques')) return

    new Glide('.carousel-plaques', {
        type: 'carousel',
        autoplay: 5000,
        perView: 7,
        swipeThreshold: 16,
        dragThreshold: 24,
        breakpoints: {
            1280: { perView: 6 },
            960: { perView: 5 },
            768: { perView: 4 },
        },
        peek: {
            before: 0,
            after: 40
        }
    }).mount()
}