const
    s4 = 'text-[1.55625rem] leading-[1.75rem] md:text-[1.795rem] md:leading-[1.875rem] lg:text-[1.9rem] lg:leading-[2.05rem]',
    s6 = 'text-[1.1875rem] leading-[1.3725rem]',
    s4Upper = 'text-[1.8875rem] leading-[2rem] md:text-[1.9175rem]',
    sx1 = 'text-[1.1995rem] leading-[1.495rem] md:text-[1.2rem] md:leading-[1.475rem]',
    body = 'text-[1.025rem] leading-[1.4975rem]',
    copy = 'text-[1.0725rem] leading-[1.395rem] lg:text-[1.125rem] lg:leading-[1.65rem]',
    emphasis = 'text-[1.0625rem] lg:text-[1.0325rem] leading-[1.4925rem]',
    blurb = 'text-[0.9375rem] leading-[1.125rem]',
    footnote = 'text-[0.8975rem] leading-[1.0625rem]',

    _fontSize = (s = 'body') => {
        if (s === 's4') return [...s4.split(' ')]
        if (s === 's6' || s === '6') return [...s6.split(' ')]
        if (s === 's4-upper') return [...s4Upper.split(' ')]
        if (s === 'sx1' || s === '1hx') return [...sx1.split(' ')]
        if (s === 'body') return [...body.split(' ')]
        if (s === 'copy') return [...copy.split(' ')]
        if (s === 'emphasis') return [...emphasis.split(' ')]
        if (s === 'blurb') return [...blurb.split(' ')]
        if (s === 'footnote') return [...footnote.split(' ')]
        return false
    }

export {
   _fontSize
}