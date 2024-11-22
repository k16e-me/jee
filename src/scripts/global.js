import Swup from 'swup'
import SwupPreloadPlugin from '@swup/preload-plugin'
import SwupProgressPlugin from '@swup/progress-plugin'
import SwupHeadPlugin from '@swup/head-plugin'
import SwupMorphPlugin from 'swup-morph-plugin'
import _active from './active'
import _accordion from './accordion'
import _swiperAwards from './swiper-awards'
import _playVideo from './play-video'
import _swiperQuotes from './swiper-quotes'
import _swiperAll from './swiper-all'
import _isSticky from './pin-top'
import _scrollspy from './scrollspy'
import _moreOrLess from './more-less'
import _prefilters from './prefilters'
import { _newsletter } from './store'
import _newsletterSubmit from './newsletter'
import _figureImg from './figure-image'
import _shim from './shim'
import _modal from './modal'

const swup = new Swup({
    animationSelector: '[class*="swup-"]',
    containers: ['#swup', '#footer'],
    animateHistoryBrowsing: true,
    plugins: [
        new SwupPreloadPlugin(),
        new SwupProgressPlugin({
            className: 'swup-progress-bar',
            delay: 150,
            finishAnimation: false,
        }),
        new SwupHeadPlugin(),
        new SwupMorphPlugin()
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
    _moreOrLess()
    _newsletterSubmit()
    _prefilters()
    _figureImg()
    _shim()
    _modal()
}

function once() {
}