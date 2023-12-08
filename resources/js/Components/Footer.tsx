import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { BsTwitterX } from "react-icons/bs"

const Footer = () => {
  return (
    <Box sx={{bgcolor : 'secondary.main', height : 'auto', py : 3, borderTop : '1px solid black'}}>
    <Typography variant="h2" component="h2"  align = "center" sx={{mb:6, fontWeight: '600'}}>Contact Us</Typography>
    <Box display="flex" justifyContent="space-evenly" sx={{width : '40vw', mx: 'auto'}} >
    <Button sx={{color : 'blue'}}>
    <FaFacebook size={70} />
    </Button>
    <Button sx={{color : 'black'}}>
    <BsTwitterX size={70} />
    </Button>
    <Button sx={{color : 'pink'}}>
    <FaInstagram size={70} />
    </Button>
    </Box>
    </Box>
  )
}

export default Footer