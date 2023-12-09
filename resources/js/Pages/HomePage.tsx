import React, { useEffect, useState } from 'react';
import { makeStyles , Box, Typography, createTheme, useMediaQuery, Button, ThemeProvider, responsiveFontSizes, Paper, Grid } from '@mui/material';
import NavbarHome from '@/Components/NavbarHome';
import Hero from '@/Components/Hero';
import SubHero from '@/Components/SubHero';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Footer from '@/Components/Footer';
import HomePageTile from '@/Components/HomePageTile';



const HomePage = () => {
    let theme = createTheme({
        palette: {
            primary: {
              main: '#FF8F8F',
            },
            secondary: {
              main: '#EEF296',
            },
            success: {
              main: '#9ADE7B',
            },
          },
          typography: {
            fontFamily: 'OpenSans',
            h1: {
              fontSize: '3.5rem',
              letterSpacing: '0.025em',
            },
            h2: {
              fontSize: '3rem',
              letterSpacing: '0.02em',
            },
            h3: {
              fontSize: '2rem',
              letterSpacing: '0.015em',
            },
            h4: {
              fontSize: '1.5rem',
            },
            h5: {
              fontSize: '0.875rem',
            },
            h6: {
              fontSize: '0.75rem',
            },
          },
        components: {
          MuiButtonBase: {
            defaultProps: {
              disableRipple: true,
            },
          },
        },
      });

      theme = responsiveFontSizes(theme);

    const matches = useMediaQuery(theme.breakpoints.up('lg'));
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
      const scrollListener = () => {
        setIsTop(window.scrollY < 500);
      };

      window.addEventListener('scroll', scrollListener);

      return () => {
        window.removeEventListener('scroll', scrollListener);
      };}, []);

      
  
  return (
    

    <ThemeProvider theme={theme}>
        <NavbarHome isTop={isTop}/>
        <Hero theme={theme}/>
        <SubHero theme={theme}/>
        <Box sx={{bgcolor : '#181818', color : "#d0d0d0"}}>
        <Typography align={matches ? "left" : "center"} variant="h2" sx={{py : 5, pl : matches? 20 : 0}}>Nice spots, close to you!</Typography>
        <Typography align={matches ? "left" : "center"} variant="h3" sx={{py : 1, pl : matches? 22 : 0, color : "grey"}}>Current location: </Typography>
        <Paper sx={{ height: 'auto', padding: '1em' , display: 'flex', justifyContent : 'space-evenly', bgcolor : '#181818', color : '#d0d0d0'}}>
          
        <Grid container justifyContent="center" spacing={0}>
        
          <HomePageTile/>
       
        
          <HomePageTile/>
        
      
          <HomePageTile/>
        
       
          <HomePageTile/>
        
      </Grid>

    </Paper>
    </Box>
        <Footer/>
    </ThemeProvider>
  )
}

export default HomePage