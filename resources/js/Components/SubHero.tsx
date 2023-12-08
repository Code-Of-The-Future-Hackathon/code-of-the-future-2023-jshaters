import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
interface SubHeroProps {
    theme: any;
  }

const SubHero : React.FC<SubHeroProps> = ({ theme }) => {
    const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box sx={{py : 30, px: 20}}>
        <Typography variant="h2" component="h2"  align={matches ? "left" : "center"}>Make your decision</Typography>
        <Typography variant="h2" component="h2"  align={matches ? "left" : "center"}>With data from OSM</Typography>
        <Typography variant="h2" component="h2"  align={matches ? "left" : "center"}>You can pick</Typography>
        <Typography variant="h2" component="h2"  align={matches ? "left" : "center"}>the places you like most</Typography>
    </Box>
  )
}

export default SubHero