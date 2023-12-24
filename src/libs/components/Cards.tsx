import { ExternalLink, Link } from 'lucide-react';
import Image, { ImageProps } from 'next/image';
import { PropsWithChildren } from 'react';

const CardsContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex flex-col justify-center items-center gap-6'>
      {children}
    </div>
  )
}

type ProjectCardLink = {
  label: string;
  href: string;
}

type CardsItem = {
  logoSrc?: ImageProps['src'],
  name: string;
  description: string;
  links?: ProjectCardLink[]
}

const CardsItem = ({
  logoSrc, name, description, links
}: CardsItem) => {
  return (
    <div className="bg-cards-background text-cards-foreground hover:bg-cards-background-hover ring-2 ring-cards-outline w-full md:w-[705px] p-8 rounded-3xl duration-200">
      {logoSrc ? (
        <Image
          className="mb-3 bg-cards-image-background rounded-2xl"
          src={logoSrc!}
          width={72}
          height={72}
          alt={`Logo of the "${name}" project.`}
        />
      ) : null}

      <p className='font-bold text-2xl md:text-4xl mb-3 break-words'>{name}</p>
      <p className='text-cards-foreground-alt text-lg'>{description}</p>

      {links?.length ? (
        <div className='flex gap-3 mt-8 flex-wrap'>
          {links.map((link) => (
            <CardsItemLink
              key={link.label}
              label={link.label}
              href={link.href}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

type CardsItemLink = {
  label: string;
  href: string;
}

/**
 * @private
 */
const CardsItemLink = ({ label, href }: CardsItemLink) => {
  return (
    <a
      className="ring-2 ring-cards-link-outline text-cards-link-foreground py-1 px-4 font-semibold
                rounded-full text-sm flex gap-2 items-center justify-center
                hover:text-cards-link-hover-foreground hover:bg-cards-link-hover-background hover:ring-cards-link-hover-outline duration-300"
      href={href}
      target='_blank'
    >
      {label} <ExternalLink size={14} />
    </a>
  )
}

/**
 * @public
 */
export const Cards = {
  Container: CardsContainer,
  Item: CardsItem,
}
