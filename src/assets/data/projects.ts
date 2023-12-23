type ProjectLink = {
  label: string,
  href: string
}

type Project = {
  name: string,
  description: string,
  links?: ProjectLink[]
}

export const projects: Project[] = [
  {
    name: 'Exames Nacionais - Moçambique',
    description: 'A non-profit personal project supported by several students and teachers, with the aim of making it easier for Mozambican students to search for exams taken in previous years, whether from secondary education (with 10th and 12th Grade exams) or Higher education (entrance exams), to help them prepare for the exams that will take place in the coming years. This is the most downloaded and used Free Education app every year in Google Play Store Mozambique.',
    links: [
      { label: 'mozexames.com', href: 'https://mozexames.com' },
      { label: 'Google Play Store', href: 'https://play.google.com/store/apps/details?id=com.kishan.exames' }
    ]
  },
  {
    name: 'Laser Chess',
    description: 'A chess-like board game with lasers!',
    links: [
      { label: 'laser-chess.com', href: 'https://laser-chess.com' },
      { label: 'Learn more', href: 'https://github.com/kishannareshpal/laserchess' }
    ]
  },
  {
    name: 'Kuots',
    description: 'A web application designed for Denise Samuel to seamlessly share her curated collection of favorite quotes with a wide audience.',
    links: [
      { label: 'kuots.net', href: 'https://kuots.net' },
      { label: 'Denise Samuel', href: 'https://www.instagram.com/denise_samuell' },
    ]
  },
  {
    name: 'Mareógrafo',
    description: 'Design and Construction of a Telemetric Hydrographic Station (Autonomous and with real time tracking capabilities).',
    links: [
      { label: 'Learn more', href: 'https://github.com/kishannareshpal/mareografo' },
    ]
  },
  {
    name: 'CS50 Web - HarvardX course projects',
    description: 'All of my CS50 Web Programming with Python and JavaScript course projects.',
    links: [
      { label: 'Learn more', href: 'https://github.com/kishannareshpal/cs50' }
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
    name: 'Text URL Downloader',
    description: "Download via text URLs on Chrome seamlessly by right-clicking any URL text on a website or pasting a URL directly into the extension's UI from the toolbar icon.",
    links: [
      { label: 'Chrome Web Store', href: 'https://chrome.google.com/webstore/detail/text-url-downloader/glbffpiffonfokkgfheanhbnleofjldc' },
      { label: 'Source code', href: 'https://github.com/kishannareshpal/texturldownloader-chromeext' }
    ]
  },
  {
    name: 'Universidade Pedagógica da Maxixe',
    description: 'The official of Universidade Pedagógica da Maxixe. After over 2 years of being active since 2018, the development '
      + 'of this website has been discontinued and shut-down. This decision stems from my relocation from Mozambique '
      + 'and the subsequent lack of time available for its maintenance. The link provided here is an archived snapshot '
      + 'of the website taken by archive.org.',
    links: [
      { label: 'Archived snapshot page', href: 'https://web.archive.org/web/20190423095520/https://www.upmaxixe.ac.mz/' },
    ]
  },
  {
    name: 'Prazos',
    description: 'Simplify your product expiration date tracking with ease. Get notified in advance when a product is nearing its expiration date.',
    links: [
      { label: 'Google Play Store', href: 'https://play.google.com/store/apps/details?id=com.kishannareshpal.prazos' },
    ]
  },
  {
    name: 'Universidade Pegagógica Engenheiros',
    description:
      'A private collaborative platform for sharing academic documents among fellow civil engineering colleagues at '
      + 'Universidade Pedagógica da Maxixe back when I was studying there.'
  },
]
