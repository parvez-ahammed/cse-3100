/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx}'],
    theme: {
        extend: {
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'fade-in-up': 'fadeInUp 0.5s ease-out',
                'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'fade-in-delay': 'fadeIn 0.5s ease-in-out 0.3s forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                fadeInUp: {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
            },
            transitionDuration: {
                '300': '300ms',
                '500': '500ms',
            },
        },
    },
    plugins: [],
};

export default config;