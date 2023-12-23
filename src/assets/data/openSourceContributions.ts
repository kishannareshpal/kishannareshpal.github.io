type ProjectLink = {
  label: string,
  href: string
}

type Project = {
  name: string,
  description: string,
  links?: ProjectLink[]
}

export const openSourceContributions: Project[] = [
  {
    name: 'mozexames-ml',
    description: 'A work-in-progress Mozambican Exams data extraction tool w/ Machine Learning.',
    links: [
      { label: 'Source code', href: 'https://github.com/mozexames/mozexames-ml' }
    ]
  },
  {
    name: 'mozambique-utils.js',
    description: "Easy to use parsers and validators for mozambican (🇲🇿) data-type formatted strings. ",
    links: [
      { label: 'Source code', href: 'https://github.com/kishannareshpal/mozambique-utils.js' },
      { label: 'NPM', href: 'https://www.npmjs.com/package/mozambique-utils' }
    ]
  },
  {
    name: 'hyper-cool-theme',
    description: 'A beautiful dark theme for Hyper terminal.',
    links: [
      { label: 'Source code', href: 'https://github.com/kishannareshpal/hyper-cool-theme' },
      { label: 'Hyper terminal app', href: 'https://hyper.is' }
    ]
  },
  {
    name: 'zsh-vscode-remote',
    description: 'Open VS Code remotely connected to an SSH host and directory. A wrapper around `code --remote ...`.',
    links: [
      { label: 'Source code', href: 'https://github.com/kishannareshpal/zsh-vscode-remote' }
    ]
  },
  {
    name: 'Easy Terminal Zoom extension for VS Code',
    description: "VSCode extension to control the terminal's font-size with keyboard shortcuts when the terminal is focused.",
    links: [
      { label: 'Source code', href: 'https://github.com/kishannareshpal/vscode-easy-terminal-zoom' },
      { label: 'VSCode Marketplace', href: 'https://marketplace.visualstudio.com/items?itemName=kishannareshpal.easy-terminal-zoom' }
    ]
  },
  {
    name: 'image-to-apple-portrait',
    description: "Ruby script to convert any image(s) into the Apple Portrait recognized format.",
    links: [
      { label: 'Source code', href: 'https://github.com/kishannareshpal/image-to-apple-portrait' }
    ]
  },
  {
    name: 'SuperDialog',
    description: 'A beautifully crafted Android dialog library.',
    links: [
      { label: 'SourceCode', href: 'https://github.com/kishannareshpal/SuperDialog' }
    ]
  },
  {
    name: 'StateView',
    description: "An Android view library that provides state controlled rendered views. Common use-case would be in a RecyclerView for example, "
      + "to display an alternative view when there is no data in the list, otherwise display the actual list items.",
    links: [
      { label: 'Source code', href: 'https://github.com/kishannareshpal/StateView' }
    ]
  },
  {
    name: 'LetterIconView',
    description:
      'An Android view library crafted to display a letter within various shapes, offering options for circular, '
      + 'rounded, and square configurations.',
    links: [
      { label: 'Source code', href: 'https://github.com/kishannareshpal/LetterIconView' }
    ]
  },
  {
    name: 'CircularProgressView',
    description: 'An Android view library for an easy to use and customizable circular progress indicator.',
    links: [
      { label: 'Source code', href: 'https://github.com/kishannareshpal/CircularProgressView' }
    ]
  },
  {
    name: 'HorizontalBarChartView',
    description:
      'An Android view library for an easy to use and customizable horizontal bar chart, for example, to '
      + 'display the storage capacity of a device.',
    links: [
      { label: 'Source code', href: 'https://github.com/kishannareshpal/HorizontalBarChartView' }
    ]
  },
  {
    name: 'BottomListSheet',
    description: "An Android view library for easily implementing a selectable list (single/multiple) on a bottom sheet dialog.",
    links: [
      { label: 'Source code', href: 'https://github.com/kishannareshpal/BottomListSheet' }
    ]
  },
  {
    name: 'PairsJS',
    description: 'A NodeJS library for fast implementation and manipulation of key-value pairs.',
    links: [
      { label: 'Source code', href: 'https://github.com/kishannareshpal/pairsjs' },
      { label: 'NPM', href: 'https://www.npmjs.com/package/@kishannareshpal/pairsjs' }
    ]
  },
  {
    name: 'Calculadora de Megas',
    description: "(en: Data calculator) The lazy man's effective internet data pack calculator. Please note that the app is in Mozambican Portuguese.",
    links: [
      { label: 'Launch app', href: 'https://kishanjadav.com/calc/' },
      { label: 'Source code', href: 'https://github.com/kishannareshpal/calc' }
    ]
  },
]
