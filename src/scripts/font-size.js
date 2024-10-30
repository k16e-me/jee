const
    body = 'text-[1.05rem] leading-[1.4975rem]',
    copy = 'text-[1.0725rem] leading-[1.395rem] lg:text-[1.125rem] lg:leading-[1.65rem]',
    emphasis = 'text-[1.0625rem] lg:text-[1.0325rem] leading-[1.4925rem]',
    blurb = 'text-[0.9375rem] leading-[1.125rem]',

    _fontSize = (s = 'body') => {
        if (s === 'body') return [...body.split(' ')]
        if (s === 'copy') return [...copy.split(' ')]
        if (s === 'emphasis') return [...emphasis.split(' ')]
        if (s === 'blurb') return [...blurb.split(' ')]
        return false
    }

export {
   _fontSize 
}