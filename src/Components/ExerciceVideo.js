import React from 'react'
import { Box, Typography } from '@mui/material'
import Style from '../assets/css/Card.module.css'
import { Stack } from '@mui/system'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Card from '../assets/css/Card.module.css'

import { useEffect } from 'react';
import Loader from './Loader';
   

  // {ExerciceVideo.map((item)=>(<p> {item.video.thumbnails[0].url} </p>)
  
  
  // )}
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const ExerciceVideo = ({ExerciceDetails,SearchedVideos}) => {   
  console.log(SearchedVideos)
  return (
    <div>
      
      <Box>

        <Typography variant="h4" mb='15px' mt="15px">
            Watch <span className={Style.video_title}> {ExerciceDetails.name}  </span> video 
        </Typography>
       
             
             
             <Grid container spacing={2}>
             {SearchedVideos.length?SearchedVideos.slice(0, 3).map((item)=>(
              <Grid item xs={12} sm={6} md={6} lg={4}>
              <Item height='300px'>
               <a href={`https://www.youtube.com/watch?v=${item.video.videoId}`}  className={Card.menu}> 
               <Typography textAlign="start" mb='5px' mt="5px" p="6px" fontSize="20px" color="#424242">
                 {item.video.title}
               </Typography>
               <img src={item.video.thumbnails[0].url} width="100%" height="auto"/>
              </a>
                
              </Item>
              </Grid>
             )):<Loader/>}
               
             </Grid>
             
          
       
      </Box>
    </div>
  )
}

export default ExerciceVideo