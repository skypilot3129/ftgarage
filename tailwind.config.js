/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    red: '#dc2626', // red-600
                },
            },
            fontFamily: {
                sans: ['Noto Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
