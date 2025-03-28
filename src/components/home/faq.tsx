import React, { FC } from 'react'
import { Element as ScrollElement } from 'react-scroll'
import { Container, Divider, Grid, Typography, Box } from '@mui/material'
import { DressCode, Location, DetailedInfo } from './faqItems'

const HomeFAQ: FC = () => {
  return (
    <Box
      id="home-introduction"
      sx={{ pt: { xs: 2, md: 4 }, backgroundColor: 'background.paper', pb: 10, overflowX: 'hidden' }}
    >
      <ScrollElement name="faq" />
      <Typography variant="h2" color="primary" align="center" sx={{ mb: 2, fontSize: { md: '32px' } }}>
        FAQ
      </Typography>
      <Container maxWidth="lg" sx={{ width: '100%', mx: 'auto' }}>
        <Grid
          container
          sx={{ justifyContent: 'center', alignItems: 'center' }}
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 2, sm: 2, md: 12 }}
          rowSpacing={6}
        >
          <Grid item xs={2} sm={6} md={6} key="faq-location">
            <>
              <Location />
            </>
          </Grid>
          <Grid item xs={2} sm={6} md={6} key="faq-dress-code">
            <>
              <DressCode />
            </>
          </Grid>
          <Grid item xs={2} sm={12} md={12} key="faq-detailed-info">
            <>
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
