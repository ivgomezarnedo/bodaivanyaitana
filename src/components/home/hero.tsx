import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery'
import { StyledButton } from '@/components/styled-button'
import { useTheme } from '@mui/material/styles'
import { Box, Container, Typography, Modal, Button, Stack, Snackbar, Alert } from '@mui/material'
import weddingConfig from '@/config/wedding.config'

const HomeHero: FC = () => {
  const { breakpoints } = useTheme()
  const matchTabletView = useMediaQuery(breakpoints.down('md'))
  const [open, setOpen] = useState(false)
  const [errorOpen, setErrorOpen] = useState(false)
  //const driveFolder = '1vnz768R8YekMWI91W3kKLTV44Tt6ujXH'

  const handleClose = (): void => setOpen(false)
  
  const handleUpload = (): void => {
    // Show error message instead of opening the folder
    setErrorOpen(true)
  }
  
  const handleErrorClose = (): void => {
    setErrorOpen(false)
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://server.fillout.com/embed/v1/' //TODO: Add regex with codes to form.
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <Box id="hero" sx={{ backgroundColor: 'background.paper', position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ position: 'relative', height: '70vh', overflow: 'hidden' }}>
        <Box sx={{ minHeight: { xs: 150, md: 250 }, opacity: 0.9 }}>
          <Image
            src={'/images/banners/paisaje_1.jpg'}
            alt="Home page banner, wedding"
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
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            top: matchTabletView ? -100 : -200,
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h2" textAlign="center"  sx={{ color: 'primary.contrastText', pb: 2, fontFamily: '"Bely Display", serif', fontSize: { md: 54, sm: 40, xs: 30 },}}>
          ¡Nos casamos!
          </Typography>
          <Typography
            variant="h1"
            textAlign="center"
            sx={{
              color: 'primary.contrastText',
              pb: 2,
              fontSize: { md: 112, sm: 72, xs: 54 },
              fontFamily: '"Bely Display", serif',
            }}
          >
            {weddingConfig.people.groom.firstName} & {weddingConfig.people.bride.firstName}
          </Typography>
          <Typography variant="h2" textAlign="center" sx={{ color: 'primary.contrastText', pb: 2 }}>
            {/*{formatDate(getWeddingDate())}*/}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
            <Box sx={{ 
              position: 'relative', 
              top: { xs: -40, sm: -60, md: -80 },
              zIndex: 1 
            }}>
              <StyledButton
                color="dark"
                size="xlarge"
                data-fillout-id={process.env.NEXT_PUBLIC_FILLOUT_RSVP_ID}
                data-fillout-embed-type="popup"
                data-fillout-inherit-parameters
              >
                CONFIRMA TU ASISTENCIA
              </StyledButton>
            </Box>
          </Box>
        </Container>
        <Box sx={{ 
          position: 'absolute', 
          bottom: 30, 
          left: '50%', 
          transform: 'translateX(-50%)', 
          zIndex: 1 
        }}>
          <StyledButton
            color="primary"
            size="large"
            onClick={handleUpload}
          >
            AÑADE TUS FOTOS Y VIDEOS
          </StyledButton>
        </Box>
      </Box>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="drive-modal-title"
        aria-describedby="drive-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', md: '80%' },
          height: { xs: '90%', md: '80%' },
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
            <Typography id="drive-modal-title" variant="h6" component="h2">
              Fotos y Videos
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleUpload}
              startIcon={<span role="img" aria-label="upload">⬆️</span>}
            >
              Subir Fotos y Videos
            </Button>
          </Stack>
          {/*
          <Typography variant="body2" sx={{ mb: 2 }}>
            Comparte tus momentos favoritos de nuestra boda. Haz clic en el botón "Subir Fotos y Videos" para añadir tus recuerdos a nuestra galería.
          </Typography>
          <Box sx={{ width: '100%', height: 'calc(100% - 100px)' }}>
            <iframe 
              src={`https://drive.google.com/embeddedfolderview?id=${driveFolder}#grid`}
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="autoplay"
            ></iframe>
          </Box>
          */}
        </Box>
      </Modal>
      
      {/* Error Message */}
      <Snackbar 
        open={errorOpen} 
        autoHideDuration={6000} 
        onClose={handleErrorClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleErrorClose} severity="error" sx={{ width: '100%' }}>
          Esta función estará disponible el día de la boda.
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default HomeHero
