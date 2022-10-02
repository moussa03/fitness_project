import React from 'react'
import { Box } from '@mui/material'
import BodyParts from './BodyParts'
import { UseTheme } from './Custom_theme';
import {ScrollMenu,VisibilityContext} from 'react-horizontal-scrolling-menu'
import ExerciceCard from './ExerciceCard';
const Horizontal_Scrollbar = ({data,isbodypart}) => {
  // const [SearchValue,Search,SearchExercice,SetExercice,handleSearch,bodyParts,SetbodyParts]=UseTheme();
  return (
    <ScrollMenu>
      {data.map((item) => (
      <Box
        key={item.id}
        m="0 40px">
        {isbodypart ? <BodyParts item={item} /> :<ExerciceCard item={item}/>}
        {/* <BodyParts item={item} /> */}
      </Box>
    ))} 
   
    </ScrollMenu>
  )
}


export default Horizontal_Scrollbar