import { Box, Typography, Button, useMediaQuery , withTheme} from '@mui/material'
import { fontWeight } from '@mui/system';
import React from 'react'

interface HeroProps {
    theme: any;
  }

  const Hero: React.FC<HeroProps> = ({ theme }) => {
    const matches = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <div style={{borderBottom : '1px solid black', backgroundColor : 'purple', position: 'relative' ,top: '-4em'}}>
    <Box sx={{pt : 20, maxWidth : '80vw', mx : 'auto', height : 'auto', pb : 40}}>
    <Box display="flex"  justifyContent={matches ? "center" : "space-around"} sx={{overflow : 'hidden', flexWrap: 'wrap', flexDirection: matches ? 'row' : 'column'}}>
<Box sx={{mr : matches? '10em' : 0}} >
<Typography variant="h1" component="h1"  align={matches ? "left" : "center"}>
Explore the
<Typography variant="h1" component="h1"  align={matches ? "left" : "center"}>green spaces</Typography>
with</Typography>
<Typography variant="h1" color="green"  align={matches ? "left" : "center"}>GREENMORE</Typography>

</Box>
{matches ? <Box sx={{ width: 300, height: 300, bgcolor: 'grey.300' }} /> : null}
</Box>

<Button variant="contained" sx={{ bgcolor : 'primary.main', mt : 15, display: 'block', mx : 'auto', fontSize: theme.typography.h2.fontSize}}>Sign up</Button>
    </Box>
    </div>
  )
}

export default Hero