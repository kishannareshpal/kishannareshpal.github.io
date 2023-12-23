import Image from "next/image";
import logo from '@/assets/images/logo-alt-dark.png';

export const Footer = () => {
  const currentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <div className="flex flex-row items-center justify-center p-12 py-24 text-white gap-6">
      <div>
        <Image
          className="pointer-events-non"
          src={logo}
          draggable={false}
          alt="Kishan Jadav's logo"
          width={64}
          height={64}
        />
      </div>

      <div>
        <p>Copyright © {currentYear()} Kishan Jadav.</p>
        <p className="opacity-25">Thanks for taking the time to check out my website. Let{"'"}s talk?</p>
      </div>
    </div>
  )
}
