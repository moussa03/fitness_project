import React from 'react'
import { UseTheme } from './Custom_theme';
import { Link } from 'react-router-dom';
import { Button,Stack, Typography } from '@mui/material';
import { Box } from '@mui/system'
import MenuCard from '../assets/css/Card.module.css'
const ExerciceCard = ({item}) => {
    const [SearchValue,Search,SearchExercice,SetExercice,handleSearch,bodyParts,SetbodyParts,bodyPart,SetbodyPart]=UseTheme();

  return (
    <Box 
    sx={{
        borderTop:'2px solid #D32F2F',
        borderBottom:"2px solid #D32F2F"
    }}
    
    >
      
      <Link to={`/exercice/${item.id}`} exact path={`exercice/${item.id}`} className={MenuCard.menu}  >
          <img src={item.gifUrl} className={MenuCard.image_category}/>
           <Box sx={{display:"flex",gap:"20px",padding:"20px"}}>
            <Link to="/home" className={MenuCard.menu}> <Button variant="soft" sx={{backgroundColor:"#F44336",color:"#FAFAFA",borderRadius:"15px"}} >{item.bodyPart}</Button></Link>
            <Link to="/home" className={MenuCard.menu}> <Button variant="soft" sx={{backgroundColor:"#FFCA28",color:"#212121",borderRadius:"15px"}}>{item.target}</Button></Link>
            
           </Box>
           <Box>
           <Typography 
           
           sx={{
            pl:"20px",
            pr:"20px",
            textAlign:"start",
            mb:"10px",
            textTransform:"capitalize",
            fontWeight:"bold"

           }}
           >
              {item.name}
            </Typography>
           </Box>
      </Link>

    </Box>
  )
}

export default ExerciceCard