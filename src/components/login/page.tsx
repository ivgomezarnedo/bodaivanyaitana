import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Login from './login'

const LoginPage: FC = () => {
  return (
    <Box id="hero" sx={{ backgroundColor: 'background.paper', position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden', opacity: 0.9 }}>
        <Box>
          <Image
            src={'/images/banners/paisaje_1.jpeg'}
            alt="Login banner, wedding"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority={true}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              margin: 0,
              opacity: 0,
              backgroundColor: 'secondary.dark',
            }}
          />
        </Box>
        <Login />
      </Box>
    </Box>
  )
}

export default LoginPage
