const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#F9FBFC',
            foreground: {
              heading: 'black',
              DEFAULT: 'black'
            },
            primary: {
              DEFAULT: "#2FFF7F",
              light: '#DAFFCC',
              foreground: {
                DEFAULT: "#000000"
              },
            },
            section: {
              foreground: 'black'
            },
            card: {
              background: {
                DEFAULT: 'transparent',
                hover: 'white',
                outline: '#E2E8F0',
              },
              foreground: {
                alt: '#0B2316',
                DEFAULT: 'black',
              },
              link: {
                foreground: 'black',
                background: 'transparent',
                outline: '#dbe0e7',
                hover: {
                  foreground: '#15803D',
                  background: '#DCFCE7',
                  outline: '#16A34A',
                },
              },
              image: {
                background: '#F1F5F9'
              }
            },
            description: {
              background: '#000',
              foreground: '#fff',
              divider: '#202020'
            },
            contact: {
              background: '#0B2316',
              foreground: {
                hover: '#DAFFCC',
                DEFAULT: 'white'
              }
            },
            skill: {
              background: '#0B2316',
              foreground: '#ffffff',
            }
          }
        },
        dark: {
          colors: {
            // // Contact: #15803D

            background: '#001A0C',
            foreground: {
              heading: '#2FFF7F',
              DEFAULT: 'white'
            },
            primary: {
              DEFAULT: "#2FFF7F",
              light: '#DAFFCC',
              foreground: {
                DEFAULT: "#000000"
              },
            },
            section: {
              foreground: '#BBF7D2'
            },
            cards: {
              background: {
                DEFAULT: '#0B2316',
                hover: '#ffffff0d',
                outline: 'transparent',
              },
              foreground: {
                alt: '#DAFFCC',
                DEFAULT: 'white',
              },
              link: {
                foreground: 'white',
                background: 'transparent',
                outline: '#0E3921',
                hover: {
                  foreground: '#2FFF7F',
                  background: 'transparent',
                  outline: '#2FFF7F',
                },
              },
              image: {
                background: '#162D22'
              }
            },
            description: {
              background: '#fff',
              foreground: '#000',
              divider: '#ddd'
            },
            contact: {
              background: '#0B2316',
              foreground: {
                hover: '#DAFFCC',
                DEFAULT: 'white'
              }
            },
            skill: {
              background: '#0B2316',
              foreground: '#ffffff',
            }
          }
        }
      }
    })
  ]
}

