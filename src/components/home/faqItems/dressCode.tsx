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
        maxWidth: 500,
        mx: 'auto',
        my: 3,
      }}
    >
      <CardActionArea
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 3 }}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.annabellaw.com/post/what-to-wear-to-a-wedding#:~:text=Black%2DTie%20Optional%20Dress%20Code"
      >
        <Typography variant="h2" align="center" color="primary.contrastText" sx={{ my: 1 }}>
          ¿Cuáles son los horarios de los autobuses?
        </Typography>

        <Box sx={{ borderRadius: 5, overflow: 'hidden', cursor: 'pointer', display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Image alt="Dress code" src="/images/home/ivan_y_aitana_bus_combined_2.png" width={350} height={530} style={{ objectFit: 'contain' }} />
        </Box>
      </CardActionArea>
    </Card>
  )
}

export default FAQDressCode
