import Swup from 'swup'
import SwupProgressPlugin from '@swup/progress-plugin'
import SwupHeadPlugin from '@swup/head-plugin'
import { _activeAnchor } from './utils/active-anchor'
import { _accordion } from './lib/accordion'
import _swiperAwards from './swiper-awards'
import _swiperQuotes from './swiper-quotes'
import _swiperAll from './swiper-all'
import _isPinned from './pin-top'
import _scrollspy from './scrollspy'
import _moreOrLess from './more-less'
import _prefilters from './prefilters'
import { _unsetShim } from './store/store'
import _newsletterSubmit from './newsletter'
import { _figureImg } from './lib/figure-image'
import _shimFx from './shim'
import _modal from './modal'
import { _headerFx } from './lib/header-fx'
import _mobileMenu from './mobile-menu'
import { _q, _ql } from './snips'
import { _drawer } from './lib/drawer'
import _search from './search'
import _modalVideo from './modal-video'
import _viewResults from './view-results'
import { _resetFilters } from './reset-filters'

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
    _activeAnchor()
    _accordion()
    _swiperAwards()
    _swiperQuotes()
    _swiperAll()
    if (_q('[data-modal-video-play]')) _modalVideo()
    if (_q('[data-pin-top]')) _isPinned()
    if (_q('[data-spy]')) _scrollspy()
    if (_q('[data-search-filter]')) _viewResults()
    if (_q('[data-reset-form]')) _resetFilters()
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