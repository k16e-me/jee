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
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms')
    ]
}