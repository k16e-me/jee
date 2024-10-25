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
            1200: { perView: 6 },
            576: { perView: 6 },
        }
    }).mount()
}