/** @type {import('tailwindcss').Config} */
const
    defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
	theme: {
        extend: {
            spacing: {
                18: '4.5rem',
                26: '6.5rem'
            },
            borderRadius: {
                '2xl': '1rem',
                '3xl': '2.5rem',
                '4xl': '4rem',
            }
        },
        screens: {
            'xs': '480px',
            'sm': '640px',
            'md': '800px',
            'ml': '992px',
            'lg': '1280px',
            'xl': '1440px',
            '2xl': '1600px',
            '3xl': '1920px',
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('tailwind-scrollbar')
    ]
}