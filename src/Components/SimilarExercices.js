import React from 'react'
import { Box, Typography } from '@mui/material'
import Style from '../assets/css/Card.module.css'
import { Stack } from '@mui/system'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Card from '../assets/css/Card.module.css'
import Horizontal_Scrollbar from './Horizontal_Scrollbar';
import { UseTheme } from './Custom_theme';
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
  const SimilarExercices = ({SimilarTarget,SimilarEquipment,isLoading}) => {
   

  return (
    <div>
      <Box>
      <Typography variant="h4" mb='30px' mt="30px">
            Watch <span className={Style.video_title}> Similar Exercice  </span> Target the same muscle group
        </Typography>
        {SimilarTarget.length?<Horizontal_Scrollbar data={SimilarTarget}/>:<Loader/>}
      </Box>
      <Box>
      <Typography variant="h4" mb='30px' mt="30px">
            Watch <span className={Style.video_title}> Similar Exercice  </span> Target the same equipement group
        </Typography>
        {SimilarTarget.length?<Horizontal_Scrollbar data={SimilarEquipment}/>:<Loader/>}
      </Box>
    </div>
  )
}

export default SimilarExercices