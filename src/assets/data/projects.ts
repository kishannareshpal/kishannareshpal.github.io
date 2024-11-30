type ProjectLink = {
  label: string,
  href: string
}

type Project = {
  logo?: string,
  name: string,
  description: string,
  links?: ProjectLink[]
}

export const projects: Project[] = [
  {
    logo: require('@/assets/images/projects/minisudoku-for-watch.png'),
    name: 'MiniSudoku for Apple Watch',
    description: 'Sudoku on the go, reimagined. A full sudoku experience on your wrist.',
    links: [
      { label: 'App Store (only on Apple Watch)', href: 'https://apps.apple.com/us/app/minisudoku-for-watch/id6642665445' },
      { label: 'Source code', href: 'https://github.com/kishannareshpal/sudoku' }
    ]
  },
  {
    logo: require('@/assets/images/projects/exames.png'),
    name: 'Exames Nacionais - Moçambique',
    description: 'A non-profit personal project supported by several students and teachers, with the aim of making it easier for Mozambican students to search for exams taken in previous years, whether from secondary education (with 10th and 12th Grade exams) or Higher education (entrance exams), to help them prepare for the exams that will take place in the coming years. This is the most downloaded and used Free Education app every year in Google Play Store Mozambique.',
    links: [
      { label: 'mozexames.com', href: 'https://mozexames.com' },
      { label: 'Google Play Store', href: 'https://play.google.com/store/apps/details?id=com.kishan.exames' }
    ]
  },
  {
    logo: require('@/assets/images/projects/laser-chess.png'),
    name: 'Laser Chess',
    description: 'A chess-like board game with lasers!',
    links: [
      { label: 'laser-chess.com', href: 'https://laser-chess.com' },
      { label: 'Learn more', href: 'https://github.com/kishannareshpal/laserchess' }
    ]
  },
  {
    logo: require('@/assets/images/projects/kuots-by-denise.png'),
    name: 'Kuots by Denise',
    description: 'A web application designed for Denise Samuel to seamlessly share her curated collection of favorite quotes with a wide audience.',
    links: [
      { label: 'kuots.net', href: 'https://kuots.net' }
    ]
  },
  {
    logo: require('@/assets/images/projects/mareografo.png'),
    name: 'Mareógrafo',
    description: 'Design and Construction of a Telemetric Hydrographic Station (Autonomous and with real time tracking capabilities).',
    links: [
      { label: 'Learn more', href: 'https://github.com/kishannareshpal/mareografo' },
    ]
  },
  {
    logo: require('@/assets/images/projects/harvard-university.png'),
    name: 'CS50 Web - HarvardX course projects',
    description: 'All of my CS50 Web Programming with Python and JavaScript course projects.',
    links: [
      { label: 'Learn more', href: 'https://github.com/kishannareshpal/cs50' },
      { label: 'Certificate', href: 'https://certificates.cs50.io/c1e0137f-8c92-4f87-b278-0005a2f74af2.pdf?size=letter' }
    ]
  },
  {
    name: 'Color Visualization Tool',
    description: 'Visualize and compare a collection of hex, rgb, or hsl colors effortlessly.',
    links: [
      { label: 'Launch app', href: 'https://kishanjadav.com/colorvisualizationtool/' },
      { label: 'Source code', href: 'https://github.com/kishannareshpal/colorvisualizationtool' }
    ]
  },
  {
    logo: require('@/assets/images/projects/text-url-downloader.png'),
    name: 'Text URL Downloader',
    description: "Download via text URLs on Chrome seamlessly by right-clicking any URL text on a website or pasting a URL directly into the extension's UI from the toolbar icon.",
    links: [
      { label: 'Chrome Web Store', href: 'https://chrome.google.com/webstore/detail/text-url-downloader/glbffpiffonfokkgfheanhbnleofjldc' },
      { label: 'Source code', href: 'https://github.com/kishannareshpal/texturldownloader-chromeext' }
    ]
  },
  {
    logo: require('@/assets/images/projects/up-maxixe.png'),
    name: 'Universidade Pedagógica da Maxixe',
    description: "The official Universidade Pedagógica da Maxixe's website. After over 2 years of being active since 2018, the development "
      + 'of this website has been discontinued and shut-down. This decision stems from my relocation from Mozambique '
      + 'and the subsequent lack of time available for its maintenance. The link provided here is an archived snapshot '
      + 'of the website taken by archive.org.',
    links: [
      { label: 'Archived snapshot page', href: 'https://web.archive.org/web/20190423095520/https://www.upmaxixe.ac.mz/' },
    ]
  },
  {
    logo: require('@/assets/images/projects/prazos.png'),
    name: 'Prazos',
    description: 'Simplify your product expiration date tracking with ease. Get notified in advance when a product is nearing its expiration date.',
    links: [
      { label: 'Google Play Store', href: 'https://play.google.com/store/apps/details?id=com.kishannareshpal.prazos' },
    ]
  },
  {
    logo: require('@/assets/images/projects/up-engenheiros.png'),
    name: 'Universidade Pegagógica Engenheiros',
    description:
      'A private collaborative platform for sharing academic documents among fellow civil engineering colleagues at '
      + 'Universidade Pedagógica da Maxixe back when I was studying there.'
  },
]
