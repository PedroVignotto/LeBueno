import { Footer, Header } from '../components'

import { GlobalStyle } from '../styles/global'

import { ToastContainer } from 'react-toastify'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <GlobalStyle />
      <ToastContainer autoClose={3000} theme="colored" />
    </>
  )
}

export default MyApp
