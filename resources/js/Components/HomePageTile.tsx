import { Link, router } from '@inertiajs/react'
import { Box, Typography, Button, Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface HomePageTileProps {
  props: any; // replace 'any' with the actual type of your props
}

const HomePageTile = ({props}: HomePageTileProps) => {
  const [reload, setReload] = useState(0);

  const handleLike = () => {
    router.post('/like', {
          'greenSpaceId': props.id,
        });
};
  return (
    <div className='rounded-md'>
    <img className='max-w-[450px] max-h-[225px]' src={"https://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + props.lat + ',' + props.lon + "&fov=80&heading=70&pitch=0&key=AIzaSyAKd0XMNMihuvX21CYeOVeLQbfoUSp3JKI"}  alt="Placeholder"/>
       <p>{props.leisure}</p>
       <p>{props.distance < 2 ? `${Math.round(props.distance * 1000)}m` : `${props.distance.toFixed(1)}km`} away</p>
<p>Likes: {props.likes}</p>
       <div className='mt-5 space-x-4'>
        <button onClick={handleLike} className='p-2 bg-pink-700 rounded-md'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8Z"/></svg></button>
     {/*  <button><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8Z"/></svg></button> */}
     <button className='p-2 bg-green-700 rounded-md'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M19 10c0 3.976-7 11-7 11s-7-7.024-7-11s3.134-7 7-7s7 3.024 7 7z"/><circle cx="12" cy="10" r="3"/></g></svg></button>
      
       </div>
       
   
</div>
    

  )
}

export default HomePageTile