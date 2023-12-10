import { Paper, Typography, Box } from '@mui/material'
import React from 'react'
interface Props {
    title : string,
    description : string,
    image : string,
}
const Tile = ({title , description , image} : Props) => {
  return (
    
    <Paper
      sx={{
        p: 3,
        mb : 2,
        mx : 6,
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        cursor: 'pointer', // Change cursor to pointer when hovering over the Paper
        bgcolor : '#181818',
        color : "#d0d0d0"
      }}
        // Open the modal when the Paper is clicked
      >
    <Typography variant="h6" component="div">
    {title}
    </Typography>
    <Box //insert image here
      sx={{
        width: '100%',
        height: '100px',
        backgroundColor: 'blue',
        my: 2,
      }}
    />
    <Typography variant="subtitle1" component="div" sx={{ color: 'grey' }}>
      {description}
    </Typography>
  </Paper>
  )
}

export default Tile