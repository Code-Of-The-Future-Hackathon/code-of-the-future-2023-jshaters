import { Link } from '@inertiajs/inertia-react'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import React from 'react'

interface NavbarHomeProps {
    isTop: boolean;
  }

  const NavbarHome: React.FC<NavbarHomeProps> = ({ isTop }) => {
  return (
    <AppBar elevation={isTop? 0 : 3} position="sticky" sx={{height : "4em" , bgcolor : isTop ? 'transparent' : 'secondary.main', zIndex: 1000,}}>
    <Toolbar >
    {isTop ? null : 
   <Box sx={{height : 1}}>
   <img src="/images/LogoFull.png" alt="Logo" style={{height : '4rem', marginTop : '0.2rem'}}/>
 </Box>
    }

    
     
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