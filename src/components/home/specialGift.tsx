import React, { FC } from 'react'
import Image from 'next/image'
import { Card, CardActionArea, Box, Typography, Container, Grid, useTheme, useMediaQuery } from '@mui/material'
import theme from '@/config/theme'

const HomeSpecialGift: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box
      id="home-specialgift"
      sx={{ pt: { xs: 2, md: 4 }, backgroundColor: 'background.paper', pb: 4, overflowX: 'hidden' }}
    >
      <Container maxWidth="lg" sx={{ width: '100%', mx: 'auto' }}>
        <Grid
          container
          sx={{ justifyContent: 'center', alignItems: 'center' }}
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 2, sm: 2, md: 12 }}
          rowSpacing={6}
        >
          <Grid item xs={2} sm={12} md={12} key="special-gift">
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
                href="/images/home/ivan_y_aitana_recuerdo_especial_mod.png"
              >
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
                    alt="Regalo especial" 
                    src="/images/home/ivan_y_aitana_recuerdo_especial_mod.png" 
                    width={isMobile ? 350 : 450} 
                    height={isMobile ? 550 : 650} 
                    style={{ objectFit: 'contain' }} 
                  />
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeSpecialGift
