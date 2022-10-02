import React from 'react'
import { Box,Stack,Typography } from '@mui/material'
import Button from '@mui/material/Button';
import banner from '../assets/images/banner.png'
import Grid from '@mui/material/Grid';
import StyleNavbar from '../assets/css/Navbar.module.css'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Wave from '../assets/images/wave.svg'
import Wave_premuim from '../assets/images/wave_premuim.svg'
import CheckIcon from '@mui/icons-material/Check';
import Price_Style from '../assets/css/price_plan.module.css'
import CloseIcon from '@mui/icons-material/Close';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow:"none",
    backgroundColor:"#F5F5F5"
  }));

const Price_plan = () => {
    
  return (
    <Box>
         <Grid container  spacing={3} >
  <Grid item xs={12} sm={12} md={6} lg={6} 
  >
    <Item backgroundColor="#F5F5F5" 
    sx={
      
      {
        flexDirection:{xs:"column",sm:"row"},
        display:"flex",
        gap:"15px",
        justifyContent:"center",
      

    }}>
    <Card sx={
      {
         width:{sx:"100%"},
         maxWidth: "350px",position:"relative"
        
      }
      
      
      } >
      <Typography
      sx={{
        fontFamily:"Raleway",
        color:"#FFF59D",
        fontSize:"30px",
        position:"absolute",
        top: "10%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      >Basic Plan </Typography>
      <CardMedia
        component="img"
        height="140"
        image={Wave}
        alt="green iguana"
      />
      <CardContent>
      <ul className={Price_Style.menu}>
            <li className={Price_Style.menu_items}>
              <span>Lorem ispum</span>
              <span>
                <CheckIcon sx={{
                  color:"#00ACC1"
                }}/>
              </span>
            </li>
            <li className={Price_Style.menu_items}>
              <span>Lorem ispum</span>
              <span>
                <CloseIcon sx={{
                  color:"#F44336"
                }}/>
              </span>
            </li>
            <li className={Price_Style.menu_items}>
              <span>Lorem ispum</span>
              <span>
                <CloseIcon sx={{
                  color:"#F44336"
                }}/>
              </span>
            </li>
            <li className={Price_Style.menu_items}>
              <span>Lorem ispum</span>
              <span>
                <CheckIcon sx={{
                  color:"#00ACC1"
                }}/>
              </span>
            </li>
           </ul>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: "350px",position:"relative" }}>
    <Typography
      sx={{
        fontFamily:"Raleway",
        color:"#FFECB3",
        fontSize:"30px",
        position:"absolute",
        top: "10%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        
      }}
      >Premuim Plan </Typography>
      <CardMedia
        component="img"
        height="140"
        image={Wave_premuim}
        alt="green iguana"
      />
      <CardContent>
       <Box>
           <ul className={Price_Style.menu}>
            <li className={Price_Style.menu_items}>
              <span>Lorem ispum</span>
              <span>
                <CheckIcon sx={{
                  color:"#00ACC1"
                }}/>
              </span>
            </li>
            <li className={Price_Style.menu_items}>
              <span>Lorem ispum</span>
              <span>
                <CheckIcon sx={{
                  color:"#00ACC1"
                }}/>
              </span>
            </li>
            <li className={Price_Style.menu_items}>
              <span>Lorem ispum</span>
              <span>
                <CheckIcon sx={{
                  color:"#00ACC1"
                }}/>
              </span>
            </li>
            <li className={Price_Style.menu_items}>
              <span>Lorem ispum</span>
              <span>
                <CheckIcon sx={{
                  color:"#00ACC1"
                }}/>
              </span>
            </li>
           </ul>
       </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
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
    </Box>
  )
}

export default Price_plan