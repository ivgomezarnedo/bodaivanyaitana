import React, { FC } from 'react'
import { Element as ScrollElement } from 'react-scroll'
import { Container, Divider, Grid, Typography, Box, useMediaQuery, useTheme } from '@mui/material'
import { DressCode, Location, DetailedInfo, SpecialGift } from './faqItems'
import { CustomExpandMoreIcon } from '.'

const HomeFAQ: FC = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      id="home-introduction"
      sx={{ pt: { xs: 2, md: 4 }, backgroundColor: 'background.paper', pb: 10, overflowX: 'hidden', position: 'relative' }}
    >
      <ScrollElement name="faq" />
      <Typography variant="h2" color="primary" align="center" sx={{ mb: 2, fontSize: { md: '32px' } }}>
        FAQ
      </Typography>
      <Container maxWidth="lg" sx={{ width: '100%', mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <Grid
          container
          sx={{ 
            justifyContent: 'center', 
            alignItems: 'center'
          }}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 2, md: 12 }}
          rowSpacing={{ xs: 4, sm: 6 }}
        >
          <Grid item xs={1} sm={1} md={6} key="faq-location" sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Location />
          </Grid>
          
          {/* Mobile-only down arrow from location to dress code */}
          {isXsScreen && (
            <Grid item xs={1} key="faq-mobile-arrow-1" 
              sx={{ 
                textAlign: 'center', 
                position: 'relative',
                height: '60px',
                mt: { xs: -2 },
                mb: { xs: -2 }
              }}
            >
              <Box sx={{ position: 'relative', height: '100%' }}>
                <CustomExpandMoreIcon 
                  targetSection="faq-dress-code" 
                  isDark={true} 
                />
              </Box>
            </Grid>
          )}
          
          <Grid item xs={1} sm={1} md={6} key="faq-dress-code" sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <>
              <ScrollElement name="faq-dress-code" />
              <DressCode />
            </>
          </Grid>
          
          {/* Down Arrow after the first row */}
          <Grid item xs={1} sm={2} md={12} key="faq-down-arrow" 
            sx={{ 
              textAlign: 'center', 
              position: 'relative',
              height: '60px',
              mt: { xs: 0, sm: -3 }
            }}
          >
            <Box sx={{ position: 'relative', height: '100%' }}>
              <CustomExpandMoreIcon 
                targetSection="faq-special-gift" 
                isDark={true} 
              />
            </Box>
          </Grid>
          
          <Grid item xs={1} sm={2} md={12} key="faq-special-gift" sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <>
              <ScrollElement name="faq-special-gift" />
              <SpecialGift />
            </>
          </Grid>
          
          {/* Down Arrow from special gift to detailed info */}
          <Grid item xs={1} sm={2} md={12} key="faq-down-arrow-2" 
            sx={{ 
              textAlign: 'center', 
              position: 'relative',
              height: '60px',
              mt: { xs: 0, sm: -3 }
            }}
          >
            <Box sx={{ position: 'relative', height: '100%' }}>
              <CustomExpandMoreIcon 
                targetSection="faq-detailed-info" 
                isDark={true} 
              />
            </Box>
          </Grid>
          
          <Grid item xs={1} sm={2} md={12} key="faq-detailed-info" sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <>
              <ScrollElement name="faq-detailed-info" />
              <DetailedInfo />
            </>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ width: '50%', mx: 'auto', mt: 5 }} />
    </Box>
  )
}

export default HomeFAQ
