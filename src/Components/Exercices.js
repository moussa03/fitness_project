import { Pagination, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
import { UseTheme } from './Custom_theme';
import MenuCard from '../assets/css/Card.module.css'
import ExerciceCard from './ExerciceCard';
import { WindowSharp } from '@mui/icons-material';

const Exercices = () => {
  const [SearchValue,Search,SearchExercice,SetExercice,handleSearch,bodyParts,SetbodyParts,bodyPart,SetbodyPart]=UseTheme();
    const ExercicePerpage=15;
    const [CurrentPage,SetcurrentPgae]=useState(1);
    const IndexoflastExercice=ExercicePerpage*CurrentPage;
    const IndexOfFirstExercice=IndexoflastExercice-ExercicePerpage;
    const CurrentExercice=SearchExercice.slice(IndexOfFirstExercice,IndexoflastExercice);
    const Paginate=(e,value)=>{
      SetcurrentPgae(value);
      window.scrollTo({top:"1800",behavior:"smooth"});
    }
    const Item = styled(Paper)(({ theme }) => ({
      // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));

  return (
    <Box
    
    sx={{backgroundColor:"transparent"}}
    >
     <Typography fontSize="30px" fontWeight="bold" mb="30px">
        Showing Results 
     </Typography>
     <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{backgroundColor:"transparent"}}>
    <Grid container spacing={2}  sx={
      {backgroundColor:"transparent",
      
      
      }}>
    {CurrentExercice.map((item) => (
    <Grid item xs={12} sm={12} md={6} lg={4} >
      <Item sx={
        {
          backgroundColor:"transparent",
          padding:"0px"
        }
        }><ExerciceCard key={item.id} item={item} className={MenuCard.menuborder}/></Item>
    </Grid>
    ))}
   </Grid>

     </Stack>

     <Stack 
     >
      {SearchExercice.length> ExercicePerpage &&
     
     <Pagination onChange={Paginate} page={CurrentPage} count={Math.ceil(SearchExercice.length/ExercicePerpage)} color="primary" sx={{display:"flex",justifyContent:"center",marginTop:"20px",marginBottom:"30px"}}/>     
      
      }


     </Stack>
    </Box>
  )
}

export default Exercices