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
  icon?: string;
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
    <div className="bg-[#0B2316] text-white w-full md:w-[705px] p-8 rounded-3xl hover:bg-white/5 duration-200">
      {logoSrc ? (
        <Image
          src={logoSrc!}
          width={84}
          height={84}
          alt={`Logo of the "${name}" project.`}
        />
      ) : null}

      <p className='text-white font-bold text-2xl md:text-4xl mb-3 break-words'>{name}</p>

      <p className='text-[#DAFFCC] text-lg'>{description}</p>

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
      className="ring-2 ring-primary/10 text-white py-1 px-4 font-semibold
                rounded-full text-sm flex gap-2 items-center justify-center
                hover:text-primary hover:bg-background hover:ring-primary duration-300"
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
