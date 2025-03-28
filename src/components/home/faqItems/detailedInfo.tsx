import React, { FC } from 'react'
import { Card, Box, Typography } from '@mui/material'
import theme from '@/config/theme'

const DetailedInfo: FC = () => {
  return (
    <Card
      elevation={4}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 3,
        backgroundColor: theme.palette.primary.dark,
        width: '100%',
        minHeight: 400,
        mx: 'auto',
        my: 3,
        p: 4,
        overflow: 'hidden',
      }}
    >
      <Typography variant="h1" align="center" color="primary.contrastText" sx={{ mb: 4 }}>
        Información Adicional
      </Typography>
      
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box>
          <Typography variant="h3" align="left" color="primary.contrastText" sx={{ mb: 2, fontWeight: 'bold' }}>
            ¿Hay código de vestimenta?
          </Typography>
          <Typography variant="body1" align="left" color="primary.contrastText" sx={{ fontSize: '1.3rem', lineHeight: 1.6 }}>
            No, no somos quien para decirle a los invitados cómo deben vestirse. 
            La finca tiene preciosos jardines, por lo que gran parte del día se celebrará al aire libre.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h3" align="left" color="primary.contrastText" sx={{ mb: 2, fontWeight: 'bold' }}>
            ¿Habrá estacionamiento disponible?
          </Typography>
          <Typography variant="body1" align="left" color="primary.contrastText" sx={{ fontSize: '1.3rem', lineHeight: 1.6 }}>
            Sí, el lugar cuenta con estacionamiento gratuito para todos los invitados que quieran ir en coche. 
          </Typography>
        </Box>

        <Box>
          <Typography variant="h3" align="left" color="primary.contrastText" sx={{ mb: 2, fontWeight: 'bold' }}>
            ¿A qué hora acaba la fiesta?
          </Typography>
          <Typography variant="body1" align="left" color="primary.contrastText" sx={{ fontSize: '1.5rem', lineHeight: 1.6 }}>
            ¯\_(ツ)_/¯
          </Typography>
        </Box>
      </Box>
    </Card>
  )
}

export default DetailedInfo 