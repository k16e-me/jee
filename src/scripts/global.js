import Swup from 'swup'
import SwupProgressPlugin from '@swup/progress-plugin'
import SwupHeadPlugin from '@swup/head-plugin'
import _active from './active'
import _accordion from './accordion'

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
}

function once() {

}