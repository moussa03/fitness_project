
import React from 'react'
import { TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
// import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import ExerciceStyle from '../assets/css/Navbar.module.css'
// import { ApiOptions} from '../Utils/FetchData'
// import {fetchdata} from '../Utils/FetchData'
import Horizontal_Scrollbar from './Horizontal_Scrollbar';
import { UseTheme } from './Custom_theme';

const SearchExercices = () => {
  // const [SearchValue,Search]=useState("");
  const [SearchValue,Search,SearchExercice,SetExercice,handleSearch,bodyParts,SetbodyParts,bodyPart,SetbodyPart]=UseTheme();
  
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark'newLocal27' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow:"none"
    // backgroundColor:"#F5F5F5"
  }));

 
  return (
      
      <div>
      <Typography  
      sx={
      {
        fontWeight:"bold",
        textAlign:"center",
        mt:{
          xs:"20px",
          sm:"20px",
          lg:"60px"
        },
        mb:{
          xs:"20px",
          sm:"20px",
          lg:"40px"
        },
        fontSize:{
          xs:"25px",
          sm:"30px",
          md:"35px"
        },
        }
      }
      >
      Awesome Exercice <br/> You Should Know 
      </Typography>
      <Box>
      <Stack direction="row" spacing={2} >
      {/* <Item ><input id ="search" label = "Title" name="body" placeholder="placeholder" type = "text" value={SearchValue} onChange={(e)=>Search(e.target.value)}  /></Item> */}
      
      <form className={ExerciceStyle.form_search} >
        <div className={ExerciceStyle.search_field}>
            <TextField borderRadius="0px !important"
              sx={{borderRadius:"0px !important"}}
              name="body"
              label="Search Exercice"
              onChange={(e)=>Search(e.target.value.toLocaleLowerCase())}
              fullWidth
              placeholder="Enter Exercice Name"
              value={SearchValue}
            />
            </div>
            <div>
            <Button variant="outlined" onClick={handleSearch}
            
            sx={
              {
                p:"16px",
                borderRadius:"0px",
                backgroundColor:'#EF5350',
                color:"#FAFAFA",
                border:"none",
                '&:hover':{
                  backgroundColor:"#F44336",
                  border:"none"
                }
              }
            }
            >Search</Button>

            </div>
          </form>
          
       </Stack>
      </Box>
      <Box 
      
      sx={{
        position:"relative",
        width:"100%",
        p:"20px"
      }}>
       <Horizontal_Scrollbar data={bodyParts} isbodypart/>


      </Box>
      </div>
      
  )
}

export default SearchExercices