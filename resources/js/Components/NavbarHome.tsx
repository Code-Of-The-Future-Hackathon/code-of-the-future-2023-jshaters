import { Link } from '@inertiajs/react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import React from 'react'

interface NavbarHomeProps {
    isTop: boolean;
  }

  const NavbarHome: React.FC<NavbarHomeProps> = ({ isTop }) => {
  return (
    <AppBar elevation={isTop? 0 : 3} position="sticky" sx={{height : "4em" , bgcolor : isTop ? 'transparent' : 'secondary.main', zIndex: 1000,}}>
    <Toolbar >
    {isTop ? null : <Typography 
      variant="h4" 
      component="div" 
      sx={{ 
        marginRight: 2, 
        fontFamily: 'Arial, sans-serif', // Replace with your desired font
        fontWeight: 'bold',
      }}>
      GreenMore
      </Typography>}

    
     
  <Button variant="contained" sx={{ ml: 'auto', bgcolor: 'primary.main' }}>
    <Link href='/login'>
      Log in
    </Link>
  </Button>

        
    </Toolbar>
  </AppBar>
  )
}

export default NavbarHome