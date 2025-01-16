import { animate, inView } from 'motion'

export const _inView = () => {
    inView('section', ({ target }) => {
        animate(
            target,
            { opacity: 1, y: [32, 0] },
            {
                duration: 0.3,
                easing: [0.17, 0.55, 0.55, 1],
            },
        )

        return () => animate(target, { opacity: 0, y: -32 })
    })
}