import React, { useEffect, useState } from 'react';
import { makeStyles , Box, Typography, createTheme, useMediaQuery, Button, ThemeProvider } from '@mui/material';
import NavbarHome from '@/Components/NavbarHome';
import Hero from '@/Components/Hero';
import SubHero from '@/Components/SubHero';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';



const HomePage = () => {
    const theme = createTheme({
        components: {
          MuiButtonBase: {
            defaultProps: {
              disableRipple: true,
            },
          },
        },
      });

    const matches = useMediaQuery(theme.breakpoints.up('md'));
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
        <Box sx={{bgcolor : 'secondary.main', height : '15vh'}}>
            <Typography variant="h2" component="h2"  align = "center">Footer</Typography>
            <Box display="flex" justifyContent="space-evenly">
            <FaFacebook size={40}/>
  <FaTwitter size={40}/>
  <FaInstagram size={40} />
            </Box>
        </Box>
    </ThemeProvider>
  )
}

export default HomePage