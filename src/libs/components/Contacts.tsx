import { Snippet } from "@nextui-org/react"
import { Github, Instagram, Linkedin, MailboxIcon } from "lucide-react"

export const Contacts = () => {
  return (
    <div className="flex flex-col gap-3 pb-3">
      <Snippet
        className="py-3 px-4 bg-gray-200"
        symbol={<div className="font-black flex flex-row items-center gap-2 mb-1"><MailboxIcon size={16} /> EMAIL:</div>}
        codeString="hello@kishanjadav.com"
      >
        <a href="mailto:kishanjadav.com?subject=Hello Kishan" className="hover:text-green-700">
          hello@kishanjadav.com
        </a>
      </Snippet>

      <Snippet
        className="py-3 px-4 bg-gray-200"
        symbol={<div className="font-black flex flex-row items-center gap-2 mb-1"><Github size={16} /> GITHUB:</div>}
      >
        <a href="https://github.com/kishannareshpal" target="_blank" className="hover:text-green-700">
          @kishannareshpal
        </a>
      </Snippet>

      <Snippet
        className="py-3 px-4 bg-gray-200"
        symbol={<div className="font-black flex flex-row items-center gap-2 mb-1"><Instagram size={16} /> INSTAGRAM:</div>}
      >
        <a href="https://instagram/kishannareshpal" target="_blank" className="hover:text-green-700">
          @kishannareshpal
        </a>
      </Snippet>

      <Snippet
        className="py-3 px-4 bg-gray-200"
        symbol={<div className="font-black flex flex-row items-center gap-2 mb-1"><Linkedin size={16} /> LINKEDIN:</div>}
      >
        <a href="https://linkedin.com/in/kishannareshpal" target="_blank" className="hover:text-green-700">
          Kishan Jadav
        </a>
      </Snippet>
    </div>
  )
}
