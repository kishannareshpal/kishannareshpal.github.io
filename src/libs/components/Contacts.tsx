import { contacts } from "@/assets/data/contacts"
import { Snippet } from "@nextui-org/react"

export const Contacts = () => {
  return (
    <div className="flex flex-col gap-3 pb-3">
      {contacts.map((contact) => {
        return (
          <Snippet
            key={contact.linkHref}
            className="py-3 px-4 bg-contact-background text-contact-foreground"
            symbol={
              <div className="font-black flex flex-row items-center gap-2 mb-1">
                <contact.icon size={16} /> {contact.title}
              </div>
            }
            codeString={contact.info}
          >
            <a href={contact.linkHref} className="hover:text-contact-foreground-hover">
              {contact.altLabel ? contact.altLabel : contact.info}
            </a>
          </Snippet>
        )
      })}
    </div>
  )
}
