/** @type {import('tailwindcss').Config} */
const
    defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
	theme: {
        extend: {
            fontFamily: {
                sans: ['Instrument Sans Variable, sans-serif', ...defaultTheme.fontFamily.sans],
                display: 'Urbanist Variable, sans-serif'
            }
        },
        screens: {
            'sm': '576px',
            'md': '960px',
            'lg': '1200px',
            'xl': '1440px',
            '2xl': '1600px',
            '3xl': '1920px',
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms')
    ]
}