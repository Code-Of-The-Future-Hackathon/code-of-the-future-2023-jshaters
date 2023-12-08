import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import React from 'react'

interface NavbarHomeProps {
    isTop: boolean;
  }

  const NavbarHome: React.FC<NavbarHomeProps> = ({ isTop }) => {
  return (
    <AppBar position="sticky" sx={{height : "4em" , bgcolor : 'secondary.main'}}>
    <Toolbar >
    {isTop ? null : <Typography 
      variant="h6" 
      component="div" 
      sx={{ 
        marginRight: 2, 
        fontFamily: 'Arial, sans-serif', // Replace with your desired font
        fontWeight: 'bold',
      }}>
      FishMP
      </Typography>}

      <Button variant="contained" sx={{ ml: 'auto' , bgcolor : 'primary.main'}}>Sign up</Button>
    </Toolbar>
  </AppBar>
  )
}

export default NavbarHome