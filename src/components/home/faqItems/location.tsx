import React, { FC } from 'react'
import Image from 'next/image'
import { Card, CardActionArea, Typography, Box, useTheme, useMediaQuery } from '@mui/material'
import theme from '@/config/theme'
import weddingConfig from '@/config/wedding.config'

const FAQLocation: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Card
      elevation={4}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        backgroundColor: theme.palette.primary.dark,
        width: { xs: '100%', sm: 500 },
        height: { xs: 600, sm: 700 },
        mx: 'auto',
        my: 3,
        overflow: 'hidden',
      }}
    >
      <CardActionArea
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          p: 3,
          height: '100%',
          overflow: 'hidden'
        }}
        target="_blank"
        rel="noopener noreferrer"
        href={weddingConfig.location.link}
      >
        <Typography variant="h1" align="center" color="primary.contrastText" sx={{ my: 1 }}>
          ¿Dónde es la boda?
        </Typography>
        <Typography variant="h4" align="center" color="primary.contrastText" sx={{ fontWeight: 'bold' }}>
          {weddingConfig.location.title}
        </Typography>
        <Box sx={{ 
          borderRadius: 5, 
          overflow: 'hidden', 
          cursor: 'pointer', 
          display: 'flex', 
          justifyContent: 'center', 
          width: '100%',
          flex: 1
        }}>
          <Image
            alt={`Map of ${weddingConfig.location.title}`}
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${weddingConfig.location.latLng}&zoom=15&size=500x700&markers=${weddingConfig.location.latLng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
            width={isMobile ? 280 : 350}
            height={isMobile ? 450 : 550}
            style={{ objectFit: 'contain' }}
          />
        </Box>
      </CardActionArea>
    </Card>
  )
}

export default FAQLocation
