import React, { FC } from 'react'
import Image from 'next/image'
import { Card, CardActionArea, Box, Typography, useTheme, useMediaQuery } from '@mui/material'

const FAQBuses: FC = () => {
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
          <Image 
            alt="Buses" 
            src="/images/home/ivan_y_aitana_bus_combined_2.png" 
            width={isMobile ? 280 : 350} 
            height={isMobile ? 450 : 500} 
            style={{ objectFit: 'contain' }} 
          />
        </Box>
      </CardActionArea>
    </Card>
  )
}

export default FAQBuses
