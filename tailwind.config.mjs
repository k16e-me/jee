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
            },
            colors: {
                parchment: {
                    '50': '#f9f7ed',
                    '100': '#f2ecd3',
                    '200': '#e5d6a3',
                    '300': '#d5ba6f',
                    '400': '#c8a047',
                    '500': '#b98c39',
                    '600': '#9f6f2f',
                    '700': '#7f5329',
                    '800': '#6b4428',
                    '900': '#5c3a27',
                    '950': '#351e13',
                },
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