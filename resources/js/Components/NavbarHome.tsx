import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import React from 'react'

const NavbarHome = () => {
  return (
    <AppBar position="static" sx={{height : "4em" , bgcolor : 'secondary.main'}}>
    <Toolbar >
    {/* <Typography 
      variant="h6" 
      component="div" 
      sx={{ 
        marginRight: 2, 
        fontFamily: 'Arial, sans-serif', // Replace with your desired font
        fontWeight: 'bold',
      }}>
      FishMP
      </Typography> */}

      <Button variant="contained" sx={{ ml: 'auto' , bgcolor : 'primary.main'}}>Sign up</Button>
    </Toolbar>
  </AppBar>
  )
}

export default NavbarHome