module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
    },
    purge: {
        enabled: true,
        content: ['./src/**/*.html', './src/**/*.vue',],
        options: {
            whitelist: ['keyframes', 'hooper$', 'hooper*', '*hooper'],
        }
    },
    theme: {
        fontFamily: {
            display: ['Questrial', 'Questrial'],
            body: ['Questrial', 'Questrial'],
        },
        inset: {
            '0': '0',
            auto: 'auto',
            '1/2': '50%',
            '1/3': '33.333%',
            '1/4': '25%',
            '1/5': '20%',
            '1/6': '16.667%',
            '1/7': '14.285%',
            '1/8': '12.85%',
            '2/3': '66.666%',
            '2/5': '40%',
            '3/4': '75%',
            '3/5': '60%',
            '4/5': '80%',
            '-1': '-.25rem',
            '-2': '-.5rem',
            '-3': '-.75rem',
            '-4': '-1rem',
            '-5': '-1.25rem',
            '-6': '-1.5rem',
            '-8': '-2rem',
            '-10': '-2.5rem',
            '-12': '-3rem',
            '-full': '-100%',
            '-3/4': '-75%',
            '-1/2': '-50%',
            '-1/4': '-25%',
            '1': '.25rem',
            '2': '.5rem',
            '3': '.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '8': '2rem',
            '10': '2.5rem',
            '12': '3rem',
            'full': '100%',
            '3/4': '75%',
            '1/2': '50%',
            '1/4': '25%',
        },


        fontSize: {
            'xs': '.875rem',
            'sm': '1rem',
            'base': '1.125rem',
            'lg': '1.25rem',
            'xl': '1.5rem',
            '2xl': '1.75rem',
            '3xl': '1.875rem',
            '4xl': '2.5rem',
            '5xl': '3rem',
            '6xl': '3.75rem',
            '7xl': '5rem',
            '8xl': '7rem',
            '9xl': '8rem',
            '10xl': '9rem'
        },
        screens: {
            xs: '480px',
            sm: '640px',
            md: '768px',
            cc: '880px',
            lg: '990px',
            xl: '1200px',
            '2xl': '1536px',
        },
        borderWidth: {
            default: '1px',
            '0': '0',
            '2': '2px',
            '3': '3px',
            '4': '4px',
            '6': '6px',
            '8': '8px',
            '10': '10px',
            '12': '12px',
        },
        boxShadow: {
            default: '0 0 25px rgba(0, 0, 0, .12)',
            md: '0 0 12px rgba(0, 0, 0, .12)',
            lg: '0 0 35px rgba(0, 0, 0, .12)',
            xl: '0 0 50px rgba(0, 0, 0, .15)',
            xxl: '0 0 65px rgba(0, 0, 0, .15)',
            up: '-12px -12px 22px #FFFFFF, 6px 6px 22px #DDDFE6',
            sm: '-6px -6px 10px #FFFFFF, 8px 8px 12px #DDDFE6',
            down: 'inset -7px -7px 16px #FFFFFF, inset 5px 5px 16px #DDDFE6',
        },
        extend: {
            colors: {
                yellow1: '#17718c',
                yellow2: '#F9C112',
                yellow3: '#DB8319',
                blue: '#2B83E4',
                teal: '#00C3CD',
                error: '#EA4335',
                gray: {
                    light: '#f3f6f6',
                    100: '#E6EBEB',
                    200: '#CBD5E0',
                    300: '#A0AEC0',
                    400: '#718096',
                    500: '#1F292E',
                    600: '#172126',
                    700: '#0D171C',
                    800: '#383f42',
                },
                gray2: ' #4B5459',
                black: '#000000',
                app: '#F0F2FA',
            },
            width: {
                '100vw': '100vw',
                '90vw': '90vw',
                '80vw': '80vw',
                '70vw': '70vw',
                '60vw': '60vw',
                '50vw': '50vw',
                '40vw': '40vw',
                '30vw': '30vw',
                '20vw': '20vw',
                '10vw': '10vw',
                '75vw': '75vw',
            },            
            height: {
                '200': '200px',
                '300': '300px',
                '400': '400px',
                '500': '500px',
                '600': '600px',
                '700': '700px',
                '800': '800px'
            },
            maxWidth: {
                '2xl': '1536px',
                '1400': '1400px',
                '1200': '1200px',
                '1000': '1000px',
                '800': '800px',
                '600': '600px',
                '400': '400px',
                '200': '200px',
                '100': '100px',
            },
            minWidth: {
                '1000': '1000px',
                '600': '600px',
                '400': '400px',
                '300': '300px',
                '200': '200px',
                '150': '150px',
            },
            maxHeight: {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                '80vh': '80vh',
                'full': '100%',
                'screen': '100vh',
            },
            borderRadius: {
                '4': '4px',
                '8': '8px',
                '12': '12px',
            },
        },
    },
    variants: {
        inset: ['responsive'],
        padding: ['responsive, last']
    },
    plugins: [
        require('tailwindcss-rfs')()
    ]
}