const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'kishan',
      themes: {
        bright: {
          colors: {
            background: '#f9fbfc',
            foreground: {
              heading: '#000000',
              DEFAULT: '#000000'
            },
            primary: {
              DEFAULT: "#2fff7f",
              light: '#daffcc',
              foreground: {
                DEFAULT: "#000000"
              },
            },
            section: {
              foreground: '#000000'
            },
            cards: {
              background: {
                hover: '#ffffff',
                DEFAULT: '#00000000',
              },
              foreground: {
                alt: '#0b2316',
                DEFAULT: '#000000',
              },
              outline: '#e2e8f0',
              link: {
                foreground: '#000000',
                background: '#00000000',
                outline: '#dbe0e7',
                hover: {
                  foreground: '#15803d',
                  background: '#dcfce7',
                  outline: '#16a34a',
                },
              },
              image: {
                background: '#f1f5f9'
              }
            },
            description: {
              background: '#000000',
              foreground: '#ffffff',
              divider: '#202020'
            },
            contact: {
              background: '#0b2316',
              foreground: {
                hover: '#daffcc',
                DEFAULT: '#ffffff'
              }
            },
            skill: {
              background: '#0b2316',
              foreground: '#ffffff',
            }
          }
        },
        dim: {
          colors: {
            background: '#001a0c',
            foreground: {
              heading: '#2fff7f',
              DEFAULT: '#ffffff'
            },
            primary: {
              DEFAULT: "#2fff7f",
              light: '#daffcc',
              foreground: {
                DEFAULT: "#000000"
              },
            },
            section: {
              foreground: '#bbf7d2'
            },
            cards: {
              background: {
                hover: '#ffffff0d',
                DEFAULT: '#0b2316',
              },
              foreground: {
                alt: '#daffcc',
                DEFAULT: '#ffffff',
              },
              outline: '#00000000',
              link: {
                foreground: '#ffffff',
                background: '#00000000',
                outline: '#0e3921',
                hover: {
                  foreground: '#2fff7f',
                  background: '#00000000',
                  outline: '#2fff7f',
                },
              },
              image: {
                background: '#162d22'
              }
            },
            description: {
              background: '#ffffff',
              foreground: '#000000',
              divider: '#dddddd'
            },
            contact: {
              background: '#0b2316',
              foreground: {
                hover: '#daffcc',
                DEFAULT: '#ffffff'
              }
            },
            skill: {
              background: '#0b2316',
              foreground: '#ffffff',
            }
          }
        }
      }
    })
  ]
}

