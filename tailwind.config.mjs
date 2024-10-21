/** @type {import('tailwindcss').Config} */
const
    defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
	theme: {
        extend: {
            screens: {
                'xs': '475px',
                ...defaultTheme.screens
            },
            fontSize: {
                xs: ['0.785rem', '1.245rem'],
                sm: ['0.875rem', '1.265rem'],
                base: ['1rem', '1.555rem'],
                md: ['1.055rem', '1.675rem'],
            },
            fontFamily: {
                sans: ['Instrument Sans Variable, sans-serif', ...defaultTheme.fontFamily.sans],
                display: 'Urbanist Variable, sans-serif'
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms')
    ]
}