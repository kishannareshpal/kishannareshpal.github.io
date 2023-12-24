import { SiGithub, SiInstagram, SiLinkedin, SiX, IconType } from '@icons-pack/react-simple-icons';
import { LucideIcon, MailboxIcon } from "lucide-react"

type Contact = {
  icon: IconType | LucideIcon,
  title: string,
  altLabel?: string,
  /**
   * The social media handle, phone number, address, etc.
   */
  info: string,
  linkHref: string,
}

export const contacts: Contact[] = [
  {
    icon: MailboxIcon,
    title: 'EMAIL',
    info: 'hello@kishanjadav.com',
    linkHref: 'mailto:kishanjadav.com?subject=Hello Kishan',
  },
  {
    icon: SiGithub,
    title: 'GITHUB',
    info: '@kishannareshpal',
    linkHref: 'https://github.com/kishannareshpal'
  },
  {
    icon: SiInstagram,
    title: 'INSTAGRAM',
    info: '@kishannareshpal',
    linkHref: 'https://instagram.com/kishannareshpal'
  },
  {
    icon: SiLinkedin,
    title: 'LINKEDIN',
    info: '@kishannareshpal',
    altLabel: 'Kishan Jadav <kishannareshpal>',
    linkHref: 'https://linkedin.com/in/kishannareshpal'
  },
  {
    icon: SiX,
    title: 'X',
    info: '@theredpand4',
    linkHref: 'https://x.com/@theredpand4'
  }
]
