import Swup from 'swup'
import SwupProgressPlugin from '@swup/progress-plugin'
import SwupHeadPlugin from '@swup/head-plugin'
import _active from './active'
import _accordion from './accordion'
import _swiperAwards from './swiper-awards'
import _playVideo from './play-video'
import _swiperQuotes from './swiper-quotes'
import _swiperAll from './swiper-all'
import _isPinned from './pin-top'
import _scrollspy from './scrollspy'
import _moreOrLess from './more-less'
import _prefilters from './prefilters'
import { _newsletter, _unsetShim } from './store'
import _newsletterSubmit from './newsletter'
import _figureImg from './figure-image'
import _shimFx from './shim'
import _modal from './modal'
import _headerFx from './header-fx'
import _mobileMenu from './mobile-menu'
import { _q, _ql } from './snips'
import _drawer from './drawer'
import _search from './search'

const swup = new Swup({
    animationSelector: '[class*="swup-"]',
    containers: ['#swup', '#footer', '#title-hidden', '#header', '#drapery', '#drawer', '#modal', '#form-global-search'],
    animateHistoryBrowsing: true,
    plugins: [
        new SwupProgressPlugin({
            className: 'swup-progress-bar',
            delay: 150,
            finishAnimation: false,
        }),
        new SwupHeadPlugin()
    ],
})

document.addEventListener('DOMContentLoaded', () => {
    once()
    init()
})
swup.hooks.on('page:view', () => init())
swup.hooks.on('link:click', () => _unsetShim())

function init() {
    _active()
    _accordion()
    _swiperAwards()
    _swiperQuotes()
    _swiperAll()
    _playVideo()
    if (_q('[data-pin-top]')) _isPinned()
    if (_q('[data-spy]')) _scrollspy()
    _moreOrLess()
    _newsletterSubmit()
    _prefilters()
    _figureImg()
    _shimFx()
    _modal()
    _drawer()
    _headerFx()
    _mobileMenu()
    _unsetShim()
    _search()
}

function once() {
}