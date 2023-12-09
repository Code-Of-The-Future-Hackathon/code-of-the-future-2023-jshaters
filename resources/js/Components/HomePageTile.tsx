import { Box, Typography, Button, Grid } from '@mui/material'
import React from 'react'

const HomePageTile = () => {
  return (
     <Box /* tile */ sx={{alignItems: 'center', justifyContent: 'center' , border : '1px solid white', m : 3}}>
    <Box sx={{display : 'flex' , justifyContent : 'center'}}>
    <img src="https://via.placeholder.com/300" alt="Placeholder"/>
    </Box>
     <Typography variant="h2" component="h2" gutterBottom sx={{textAlign : 'center', px : 5}}>
       Place, Location
     </Typography>
     <Box sx={{ display: 'flex', gap: '1em' , justifyContent : 'center'}}>
       <Button variant="contained" color="primary" sx={{px : 3, fontSize : 20, m : 2,}}>
         Like
       </Button>
       <Button variant="contained" color="secondary"  sx={{px : 3, fontSize : 20, m : 2 ,}}>
         Review
       </Button>
    </Box>
   

    

    
     
   </Box>

  )
}

export default HomePageTile