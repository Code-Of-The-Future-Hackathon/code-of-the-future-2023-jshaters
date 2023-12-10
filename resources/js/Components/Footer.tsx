import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { BsTwitterX } from "react-icons/bs"
import { Link } from '@inertiajs/react'

const Footer = () => {
  return (
    <Box sx={{bgcolor : 'success.main', height : 'auto', py : 3, borderTop : '1px solid black'}}>
    <Typography variant="h2" component="h2"  align = "center" sx={{mb:4, fontWeight: '600', fontFamily : 'opensanscbold'}}>Contact Us</Typography>
    {/* <Box display="flex" justifyContent="space-evenly" sx={{width : '40vw', mx: 'auto'}} >
    <Button sx={{color : 'blue'}}>
    <FaFacebook size={70} />
    </Button>
    <Button sx={{color : 'black'}}>
    <BsTwitterX size={70} />
    </Button>
    <Button sx={{color : 'orange'}}>
    <FaInstagram size={70} />
    </Button>
    </Box> */}
    <Box sx={{ pt: 4 }}>
        <Typography variant="body2" color="text.secondary" align="center">
          {'Made with ❤️ by JSHaters ( '}
            
          <Link style={{color : 'blue'}} href="https://github.com/FloweyAndinov">
            {'Flowey'}
          </Link>
          {' & '}
          <Link style={{color : 'blue'}} href="https://github.com/Trephyyy">
            {'Trephy'}
          </Link>
          {' )'}
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer