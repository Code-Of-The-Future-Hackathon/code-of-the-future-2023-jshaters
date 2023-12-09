import { Link } from '@inertiajs/react';
import { Box, Typography, Button, useMediaQuery , withTheme} from '@mui/material'
import { fontWeight } from '@mui/system';
import React from 'react'

interface HeroProps {
    theme: any;
  }

  const Hero: React.FC<HeroProps> = ({ theme }) => {
    const matches = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <div className="hero" style={{borderBottom : '1px solid black', position: 'relative' ,top: '-4em', marginBottom : '-4em'}}>
    <Box sx={{pt : 20, maxWidth : '80vw', mx : 'auto', height : 'auto', pb : 30}}>
    <Box display="flex"  justifyContent={matches ? "center" : "space-around"} sx={{overflow : 'hidden', flexWrap: 'wrap', flexDirection: matches ? 'row' : 'column'}}>
    <Box sx={{mr : matches? '17.5em' : 0}} >
    <Typography variant="h1" component="h1" sx={{color : "#d0d0d0"}} align={matches ? "left" : "center"}>
    Explore the
    <Typography variant="h1" component="h1"  align={matches ? "left" : "center"}>green spaces</Typography>
    with</Typography>
    <Typography variant="h1" align={matches ? "left" : "center"} sx={{fontFamily: 'OpenSansBold', color: theme.palette.success.main}}>GREENMORE</Typography>

    </Box>
    {matches ? <Box sx={{ width: 300, height: 300, bgcolor: 'transparent' }} /> : null}
    </Box>

{/* Register Button */}
    <Button variant="contained" 
        sx={{ bgcolor : 'primary.main', mt : 30, display: 'block', mx : 'auto', fontSize: theme.typography.h2.fontSize}}>
          <Link href={route('register')}>
        Get Started
        </Link>
    </Button>

    </Box>
    </div>
  )
}

export default Hero