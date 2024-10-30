const
    _body = () => document.body,
    _q = (selector, parent) => (parent ? parent : document).querySelector(selector),
    _ql = (selector, parent) => Array.from((parent ? parent : document).querySelectorAll(selector)),
    _even = n => n % 2 == 0,
    _odd = n => Math.abs(n % 2) == 1,
    _capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(),
    _sectionPadding = (direction = 'top') => {
        if (direction === 'top') return ['pt-8', 'md:pt-14', 'lg:pt-20']
        if (direction === 'bottom') return ['pb-8', 'md:pb-14', 'lg:pb-20']
        if (direction === 'both') return ['py-8', 'md:py-14', 'lg:py-20']
    },
    _xPadding = (edges = 'both') => {
        if (edges === 'both') return ['px-3', 'md:px-8', 'lg:px-16']
        if (edges === 'right') return ['pr-3', 'md:pr-8', 'lg:pr-16']
        if (edges === 'both-mdup') return ['md:px-8', 'lg:px-16']
    },
    _gridGap = (direction = 'y') => {
        if (direction === 'y') return ['gap-y-8', 'md:gap-y-14', 'lg:gap-y-20']
        if (direction === 'x') return ['gap-x-3', 'md:gap-x-6', 'lg:gap-x-8']
    }

export {
    _body, _q, _ql, _even, _odd, _capitalize, _sectionPadding, _gridGap, _xPadding
}