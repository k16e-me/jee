import Swup from 'swup'
import SwupProgressPlugin from '@swup/progress-plugin'
import SwupHeadPlugin from '@swup/head-plugin'
import _active from './active'
import _accordion from './accordion'
import _swiperAwards from './swiper-awards'
import _playVideo from './play-video'
import _swiperQuotes from './swiper-quotes'
import _swiperAll from './swiper-all'
import _isSticky from './pin-top'
import _scrollspy from './scrollspy'

const swup = new Swup({
    animationSelector: '[class*="swup-"]',
    containers: ['#swup', '#footer'],
    animateHistoryBrowsing: true,
    plugins: [
        new SwupProgressPlugin({
            className: 'swup-progress-bar',
            delay: 150,
            finishAnimation: false,
        }),
        new SwupHeadPlugin(),
    ],
})

document.addEventListener('DOMContentLoaded', () => {
    once()
    init()
})
swup.hooks.on('page:view', () => init())

function init() {
    _active()
    _accordion()
    _swiperAwards()
    _swiperQuotes()
    _swiperAll()
    _playVideo()
    _isSticky()
    _scrollspy()
}

function once() {

}