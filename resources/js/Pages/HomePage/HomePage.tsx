import React from 'react';
import { makeStyles , Box} from '@mui/material';
import { Container, Typography } from '@mui/material';
import NavbarHome from '@/Components/NavbarHome';


const HomePage = () => {
  return (
    <>
        <NavbarHome/>
        <Box sx={{pt : 20, maxWidth : '80%', mx : 'auto'}}>
        <Box display="flex" justifyContent="space-between">
  <Box sx={{ mr: 2 }} >
    <Typography variant="h1" component="h1" align="left">
    Explore the
green spaces
with</Typography>
 <Typography variant="h1" color="green">GREENMORE</Typography>
    
  </Box>
  <Box sx={{ width: 500, height: 300, bgcolor: 'grey.300' }} />
</Box>
        </Box>
    </>
  )
}

export default HomePage