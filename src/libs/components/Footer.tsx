import Image from "next/image";
import logo from '@/assets/images/logo-alt-dark.png';

export const Footer = () => {
  const currentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-12 py-24 text-white gap-6">
      <div>
        <Image
          className="pointer-events-none animate-pulse"
          src={logo}
          draggable={false}
          alt="Kishan Jadav's logo"
          width={72}
          height={72}
        />
      </div>

      <div className="text-center md:text-start">
        <p>Copyright © {currentYear()} Kishan Jadav.</p>
        <p className="opacity-25">
          Thanks for taking the time to check out my website.{' '}
          <a href="#description">Let{"'"}s talk?</a>
        </p>
      </div>
    </div>
  )
}
