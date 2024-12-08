const
    topPadding = 'pt-8 md:pt-14 lg:pt-20',
    bottomPadding = 'pb-8 md:pb-14 lg:pb-20',
    bottomPaddingMdDown = 'pb-8 md:pb-14 lg:pb-0',
    bothPadding = 'py-8 md:py-14 lg:py-20',
    bothPaddingMdDown = 'py-8 md:py-14 lg:py-0',
    topPaddingMdUp = 'md:pt-14 lg:pt-20',
    topPaddingLgUp = 'lg:pt-20',
    topPaddingXlUp = 'xl:pt-20',
    edgePaddingXlUpR = 'xl:pr-16',
    edgePaddingXlUpL = 'xl:pl-16',
    edgePaddingLgL = 'px-4 md:px-8 lg:pl-16 lg:pr-0',
    headerAndBlockSpacing = 'space-y-4 md:space-y-6 lg:space-y-7',
    gapY = 'gap-y-7 xs:gap-y-8 md:gap-y-10 ml:gap-y-14 lg:gap-y-20',

    _body = () => document.body,
    _q = (selector, parent) => (parent ? parent : document).querySelector(selector),
    _ql = (selector, parent) => Array.from((parent ? parent : document).querySelectorAll(selector)),
    _even = n => n % 2 == 0,
    _odd = n => Math.abs(n % 2) == 1,
    _capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(),
    _sectionPadding = (direction = 'top') => {
        if (direction === 'top') return [...topPadding.split(' ')]
        if (direction === 'top-md-up') return [...topPaddingMdUp.split(' ')]
        if (direction === 'both-md-down') return [...bothPaddingMdDown.split(' ')]
        if (direction === 'bottom-md-down') return [...bottomPaddingMdDown.split(' ')]
        if (direction === 'top-lg-up') return [...topPaddingLgUp.split(' ')]
        if (direction === 'top-xl-up') return [...topPaddingXlUp.split(' ')]
        if (direction === 'bottom') return [...bottomPadding.split(' ')]
        if (direction === 'both') return [...bothPadding.split(' ')]
    },
    _xPadding = (edges = 'both') => {
        if (edges === 'both') return ['px-4', 'md:px-8', 'lg:px-16']
        if (edges === 'right') return ['pr-4', 'md:pr-8', 'lg:pr-16']
        if (edges === 'left') return ['pl-4', 'md:pl-8', 'lg:pl-16']
        if (edges === 'left-md-down') return ['pl-4', 'md:pl-8', 'lg:pl-0']
        if (edges === 'both-mdup') return ['md:px-8', 'lg:px-16']
        if (edges === 'both-md-up-lg-l') return ['md:px-8', 'lg:pl-16', 'lg:pr-0']
        if (edges === 'left-md-up') return ['md:pl-8', 'lg:pl-16']
        if (edges === 'both-mddown-lg-l') return ['px-4', 'md:px-8', 'lg:pl-0', 'lg:pr-16']
        if (edges === 'both-md-down-l') return ['px-4', 'md:px-8', 'lg:!pr-0', 'lg:pl-16']
        if (edges === 'both-ml-down') return ['px-4', 'md:px-8', 'lg:px-0']
        if (edges === 'both-md-down') return ['px-4', 'md:px-8', 'lg:pr-0']
        if (edges === 'both-md-down-lg-r') return ['px-4', 'md:px-8', 'lg:pl-0', 'lg:pr-16']
        if (edges === 'both-lgdown') return ['px-4', 'md:px-8', 'lg:px-16', 'xl:pr-0']
        if (edges === 'both-lgdown-l') return ['px-4', 'md:px-8', 'lg:px-16', 'xl:pl-0']
        if (edges === 'both-lg-down-xl-r') return ['px-4', 'md:px-8', 'lg:px-16', 'xl:pl-0']
        if (edges === 'left-lgdown-l') return ['pl-4', 'md:pl-8', 'lg:pl-16', 'xl:pl-0']
        if (edges === 'left-xldown-l') return ['pl-4', 'md:pl-8', 'lg:pl-16']
        if (edges === 'both-lg-l') return [...edgePaddingLgL.split(' ')]
        if (edges === 'both-xlup-r') return [...edgePaddingXlUpR.split(' ')]
        if (edges === 'both-xlup-l') return [...edgePaddingXlUpL.split(' ')]
    },
    _gridGap = (direction = 'y') => {
        if (direction === 'y') return [...gapY.split(' ')]
        if (direction === 'x') return ['gap-x-3', 'md:gap-x-6', 'lg:gap-x-8']
    },
    _spaceY = () => {
        return [...headerAndBlockSpacing.split(' ')]
    }

export {
    _body, _q, _ql, _even, _odd, _capitalize, _sectionPadding, _gridGap, _xPadding, _spaceY
}