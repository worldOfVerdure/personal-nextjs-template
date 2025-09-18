// src/app/layout.tsx
'use client';

import { getTheme } from '@/theme'; //Only needed for only light mode
import { Global, css } from '@emotion/react';
import { ReactNode/*, useState */ } from 'react';//useState for light/dark mode
import { ThemeProvider, CssBaseline } from '@mui/material';
//import { useCachedTheme } from '@/theme/utils/useCachedTheme.ts'; //Needed for light/dark mode

export default function RootLayout({ children }: { children: ReactNode }) {
  //const [mode, setMode] = useState<'light' | 'dark'>('light');
  //const theme = useCachedTheme(mode); //For light and dark mode

   const theme = getTheme('light');

  return (
    <html lang="en-US">
      <body>
        <ThemeProvider theme={theme} >
          <CssBaseline />
          <Global
            styles={ theme => css`
              html {
                font-size: 62.5%;
              }
              body {
                background-color: ${theme.palette.background.default};
                font-size: 1.6rem;
              }
            `}
          />
          {/* Optional: Add a toggle button or context provider here */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
