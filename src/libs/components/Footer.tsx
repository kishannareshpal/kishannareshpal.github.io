'use client';

import Image from "next/image";
import logoDark from '@/assets/images/logo-alt-dark.png';
import logoLight from '@/assets/images/logo-alt-light.png';
import { useDarkMode } from 'usehooks-ts';

export const Footer = () => {
  const { isDarkMode } = useDarkMode(true);

  const currentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <footer className="flex flex-col md:flex-row items-center justify-center p-12 py-24 gap-6">
      <div>
        <Image
          className="pointer-events-none animate-pulse"
          src={isDarkMode ? logoDark : logoLight}
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
          <a href="/#description">Let{"'"}s talk?</a>
        </p>
      </div>
    </footer>
  )
}
