import React from 'react'
import { Stack, Typography } from '@mui/material'
import Horizontal_Menu from '../assets/css/Horizontal_Bar.module.css'
import Icon from '../assets/icons/gym.png'
import { UseTheme } from './Custom_theme';

const BodyParts = ({item}) => {
const [SearchValue,Search,SearchExercice,SetExercice,handleSearch,bodyParts,SetbodyParts,bodyPart,SetbodyPart]=UseTheme();

  return (
    <Stack 
    type="button"
    alignItems="center"
    justifyContent="center"
    className={Horizontal_Menu.horizontal_bar}
    sx={{
       borderTop:bodyPart===item?'1px solid #ff2625':"",
       width:'100px',
       height:"120px",
       gap:"47px",
       cursor:"pointer"
    }}
    onClick={()=>{SetbodyPart(item)
    window.scrollTo({top:1800,left:100,behavior:'smooth'})
    }
   
  
  }

    >
    <img src={Icon} width='40px' height='40px' />   
    <Typography fontWeight="bold">
      {item}
    </Typography>
    </Stack>
  )
}

export default BodyParts