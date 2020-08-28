import React from 'react'
import { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'
import Globalstyle from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Globalstyle />
    </ThemeProvider>
  )
}

export default MyApp
