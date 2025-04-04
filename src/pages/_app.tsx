import React, { useEffect, useState } from 'react'
import App from 'next/app'
import Head from 'next/head'
import type { AppContext, AppInitialProps, AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import { MUIProvider } from '@/providers'
import 'slick-carousel/slick/slick.css'
import '@/styles/globals.css'
import '@/styles/react-slick.css'
import { Splash } from '@/components/splash'
import { userHasPrevLogin } from '@/utils/password'
import { LoginPage } from '@/components/login'
import weddingConfig from '@/config/wedding.config'

// eslint-disable-next-line @typescript-eslint/ban-types
type CustomAppProps = {}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function MyCustomApp({ Component, pageProps }: AppProps & CustomAppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const hasPrevLogin = userHasPrevLogin()
    setIsLoggedIn(hasPrevLogin)
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content={`We're happy to invite you to ${weddingConfig.people.bride.firstName} and ${weddingConfig.people.groom.firstName}'s wedding.`}
        />
        <title>Iván & Aitana</title>
      </Head>
      <MUIProvider>
        <CssBaseline />
        {isLoggedIn ? (
          <>
            <Splash timeout={200} />
            <Component {...pageProps} />
          </>
        ) : (
          <>
            <Splash timeout={200} />
            <LoginPage />
          </>
        )}
      </MUIProvider>
    </>
  )
}

MyCustomApp.getInitialProps = async (context: AppContext): Promise<CustomAppProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context)

  return {
    ...ctx,
  }
}

export default MyCustomApp
