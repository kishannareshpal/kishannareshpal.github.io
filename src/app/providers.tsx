'use client'

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

export const Providers = ({children}: { children: React.ReactNode }) => {

  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}
