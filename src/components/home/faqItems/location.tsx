import React, { FC } from 'react'
import Image from 'next/image'
import { Card, CardActionArea, Typography, Box } from '@mui/material'
import theme from '@/config/theme'
import weddingConfig from '@/config/wedding.config'

const FAQLocation: FC = () => {
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
        maxWidth: 412,
        mx: 'auto',
      }}
    >
      <CardActionArea
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 1 }}
        target="_blank"
        rel="noopener noreferrer"
        href={weddingConfig.location.link}
      >
        <Typography variant="h3" align="center" color="primary.contrastText" sx={{ my: 1 }}>
          ¿Dónde es la boda?
        </Typography>
        <Typography variant="body1" align="center" color="primary.contrastText" sx={{ fontWeight: 'bold' }}>
          {weddingConfig.location.title}
        </Typography>
        <Typography variant="body1" align="center" color="primary.contrastText" sx={{ mb: 1 }}>
          {weddingConfig.location.address}
        </Typography>
        <Box sx={{ borderRadius: 5, overflow: 'hidden', cursor: 'pointer' }}>
          <Image
            alt={`Map of ${weddingConfig.location.title}`}
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${weddingConfig.location.latLng}&zoom=13&size=400x400&markers=${weddingConfig.location.latLng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
            width={300}
            height={300}
          />
        </Box>
      </CardActionArea>
    </Card>
  )
}

export default FAQLocation
