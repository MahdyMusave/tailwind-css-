/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
  
  theme: {
    extend: {
    //   keyframes:{
    //     typing: {
    //       "0%": {
    //         width: "0%",
    //         visibility: "hidden"
    //       },
    //       "100%": {
    //         width: "100%"
    //       }
    //     },
    //  blink: {
    //       "50%": {
    //         borderColor: "transparent"
    //       },
    //       "100%": {
    //         borderColor: "white"
    //       }
    //     }
    //   },

    //   animation:{
    //      typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
    //   }
      // type write animation 2
    animation: {
      typewriter: 'typewriter 2s steps(11) forwards',
      caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
    },    
    keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
    }
  },
  plugins: [],
}

