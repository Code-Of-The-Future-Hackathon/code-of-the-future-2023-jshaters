import { Box, Typography, Button, useMediaQuery , withTheme} from '@mui/material'
import React from 'react'

interface HeroProps {
    theme: any;
  }

  const Hero: React.FC<HeroProps> = ({ theme }) => {
    const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <div style={{borderBottom : '1px solid black'}}>
    <Box sx={{pt : 20, maxWidth : '80vw', mx : 'auto', height : 'auto', pb : 40}}>
    <Box display="flex"  justifyContent={matches ? "center" : "space-around"} sx={{overflow : 'hidden', flexWrap: 'wrap', flexDirection: matches ? 'row' : 'column', gap : 100}}>
<Box sx={{ mr: 2 }} >
<Typography variant="h2" component="h2"  align={matches ? "left" : "center"}>
Explore the
<Typography variant="h2" component="h2"  align={matches ? "left" : "center"}>green spaces</Typography>
with</Typography>
<Typography variant="h2" color="green"  align={matches ? "left" : "center"}>GREENMORE</Typography>

</Box>
{matches ? <Box sx={{ width: 300, height: 300, bgcolor: 'grey.300' }} /> : null}
</Box>

<Button variant="contained" sx={{ bgcolor : 'primary.main', mt : 15, display: 'block', mx : 'auto'}}>Sign up</Button>
    </Box>
    </div>
  )
}

export default Hero