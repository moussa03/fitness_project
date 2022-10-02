import React from 'react'
import { Box,Stack,Typography } from '@mui/material'
import { fontSize } from '@mui/system'
import Button from '@mui/material/Button';
import banner from '../assets/images/banner.png'
import Styles from "../assets/css/Navbar.module.css"
import Logo from '../assets/images/Logo.png';
import Grid from '@mui/material/Grid';
import StyleNavbar from '../assets/css/Navbar.module.css'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { UseTheme } from './Custom_theme';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow:"none",
  backgroundColor:"#F5F5F5"
}));
const HeroBanner = () => {
  // const [SearchValue,Search,SerchExercice,SetExercice,handleSearch]=UseTheme();

  return (
    <>
    <Grid container  spacing={3} >
  <Grid item xs={8} sm={6} md={6} lg={6}>
    <Item backgroundColor="#F5F5F5">
      <Typography
     
      sx={
        {
        textAlign:"start",
        ml:"20px",
        fontSize:{
          xs:"20px",
          sm:"30px"
        },
        color:"#F44336",
        fontWeight:"bold",
        // fontFamily:"Inter",
        mt:{
         xs:"100px",
         sm:"170px"
       }}}
      >Fitness Club</Typography>
      <Typography
      sx={
        { 
          textAlign:"start", ml:"20px",fontWeight:"bold",
          fontSize:{
            xs:"25px",
            sm:"35px",
            
          },
          color:"#212121",
          mt:'15px',
          mb:"15px",
        }}
      
      >
        Sweet, Smile <br/> And Repeat 
      </Typography>
      <Typography
      sx={{
        textAlign:"start",
        ml:"20px",
        fontSize:{
          xs:"16px",
          sm:"26px"
        },
       
        color:"#212121",
      }}
      >
        Check out the most effective exercice 
      </Typography>
      <Button 
      
      sx={
        {
          display:"flex",
          margin:"20px",
          backgroundColor:"#D50000",
          width:{
            xs:"100%",
            sm:"auto"
          },
          fontSize:{xs:"15px"},
          padding:'10px',
          '&:hover':{
            backgroundColor:"#F44336",
          }
        }
        
        
      
      }
      variant="contained"
      >Explore Exercices</Button>
      <Typography  className={StyleNavbar.exercice_headline}
      
      sx={
        {
         position: "relative",
         textAlign:"start",
        // /* bottom: 0; */
         marginTop: "85px",
        // fontSize: "168px",
        // width: "100%",
        color: "#E53935",
        // right: "275px",
         opacity: 0.4,
        fontSize:{
          xs:"60px",
          sm:'120px',
          md:"150px"
        },
        position:{
          md:"absolute"
        },
        ml:{
          xs:"20px",
        },
        mt:{
          xs:"13px",
          md:"-60px",
          lg:"60px"
      },
      }
      }
      >
       
       Exercices 
      </Typography>
    </Item>
  </Grid>
  <Grid item xs={4} sm={6} md={6} lg={6} 
  sx={{display:{
    xs:"none",
    sm:"block"
  
  }}}
  >
    <Item>
    <img  className={StyleNavbar.hero_banner_img} src={banner} width="auto" height="auto"/>
    </Item>
  </Grid>
    </Grid>
    </>
  )
}

export default HeroBanner