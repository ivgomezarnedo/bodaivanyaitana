import React, { FC } from 'react'
import Image from 'next/image'
import { Card, CardActionArea, Box, Typography } from '@mui/material'
import theme from '@/config/theme'

const FAQDressCode: FC = () => {
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
        width: 500,
        height: 700,
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
        href="/images/home/ivan_y_aitana_bus_combined_2.png"
      >
        <Typography variant="h2" align="center" color="primary.contrastText" sx={{ my: 1 }}>
          ¿Cuáles son los horarios de los autobuses?
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
          <Image alt="Dress code" src="/images/home/ivan_y_aitana_bus_combined_2.png" width={350} height={500} style={{ objectFit: 'contain' }} />
        </Box>
      </CardActionArea>
    </Card>
  )
}

export default FAQDressCode
