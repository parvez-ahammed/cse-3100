/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: 'class', // ✅ required
    content: ['./src/**/*.{js,jsx}'],
    theme: {
        extend: {
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
            },
        },
    },
    plugins: [],
};

export default config;
