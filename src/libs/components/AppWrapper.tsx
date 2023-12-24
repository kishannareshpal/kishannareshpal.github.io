'use client';

import { PropsWithChildren } from "react"
import { Footer } from "./Footer"
import { useDarkMode } from "usehooks-ts";

export const AppWrapper = ({ children }: PropsWithChildren) => {
  const { isDarkMode } = useDarkMode(true);

  return (
    <div className={`${isDarkMode ? 'dim' : 'bright'} bg-background text-foreground`}>
      {children}
      <Footer />
    </div>
  )
}
