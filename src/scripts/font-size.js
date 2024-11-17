const
    s3 = 'text-[1.775rem] leading-[2rem] md:text-[2.75rem] md:leading-[2.875rem] lg:text-[3.25rem] lg:leading-[3.4375rem]',
    s4 = 'text-[1.55625rem] leading-[1.75rem] md:text-[1.795rem] md:leading-[1.875rem] lg:text-[1.9rem] lg:leading-[2.05rem]',
    s5 = 'text-[1.3125rem] leading-[1.45rem] md:text-[1.4625rem] md:leading-[1.75rem] lg:text-[1.5275rem] lg:leading-[1.7375rem]',
    s6 = 'text-[1.1875rem] leading-[1.3725rem]',
    s4Upper = 'text-[1.8875rem] leading-[2rem] md:text-[1.9175rem]',
    sx1 = 'text-[1.1995rem] leading-[1.495rem] md:text-[1.2rem] md:leading-[1.475rem]',
    sx2 = 'text-[1.35rem] leading-[1.5rem] md:text-[1.4rem]',
    body = 'text-[1.025rem] leading-[1.4975rem]',
    copy = 'text-[1.0725rem] leading-[1.395rem] lg:text-[1.125rem] lg:leading-[1.55rem]',
    emphasis = 'text-[1.0625rem] lg:text-[1.0325rem] leading-[1.425rem]',
    blurb = 'text-[0.9375rem] leading-[1.125rem]',
    footnote = 'text-[0.8975rem] leading-[1.0925rem]',

    _fontSize = (s = 'body') => {
        if (s === 's3' || s === '3') return [...s3.split(' ')]
        if (s === 's4' || s === '4') return [...s4.split(' ')]
        if (s === 's5' || s === '5') return [...s5.split(' ')]
        if (s === 's6' || s === '6') return [...s6.split(' ')]
        if (s === 's4-upper') return [...s4Upper.split(' ')]
        if (s === 'sx1' || s === '1hx') return [...sx1.split(' ')]
        if (s === 'sx2' || s === '2hx') return [...sx2.split(' ')]
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