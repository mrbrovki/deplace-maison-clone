import { FC, ReactNode } from 'react';
import ThemeProvider from 'styled-components';

const theme = {};

const Theme:FC<{children:ReactNode[]}> = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default Theme;