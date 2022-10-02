import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Icon, Typography } from '@mui/material';
import Logo from "../assets/images/Logo.png"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SendIcon from '@mui/icons-material/Send';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import Menu from '../assets/css/Navbar.module.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  background:"transparent",
  boxShadow:"none"
}));

export default function BasicGrid() {
  return (
    <Box  sx={{ 
      flexGrow: 1,
      backgroundColor:"#455A64"
    }} 
    
    >
       <Grid container spacing={2}>

        
       <Grid item xs={2} lg={4}>
        <Item>
          <img src={Logo}/>
          </Item>

        </Grid>

        <Grid item xs={10} lg={8} display="flex" gap="10px" alignItems="center">
        <Grid item xs={12} lg={4}>
          <Item>
            <Typography sx={{
              fontFamily:"Raleway",
              fontWeight:"bold",
              color:"#F5F5F5"
            }}>
            SUBSCRIBE TO OUR NEWSLETTER
            </Typography> 
            </Item>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Item>
          <Box
          component="form"
          sx={{
            '& > :not(style)': { mr: 1, width: '100%',color:"#F5F5F5" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField 
          id="outlined-basic" label="Email" variant="standard" sx={{
            color:"#F5F5F5",
            textColor:"#inputProps={{ style: { fontFamily: 'Arial', color: 'white'}}}"
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button><SendIcon sx={{color: '#F5F5F5'}}/></Button>
              </InputAdornment>
            ),
            style: { fontFamily: 'Raleway', color: '#F5F5F5'}
          }}
          InputLabelProps={{
            style: { fontFamily: 'Raleway', color: '#F5F5F5'}
          }}
          />
         
    </Box>
           </Item>
        </Grid>
        </Grid>

      </Grid>

      <Divider sx={{backgroundColor:"#F5F5F5"}}></Divider>

      <Grid container spacing={2}>
        <Grid item xs={6} sm={4} lg={4}>
        <Item>
          <Typography textUnderline="underline" color='#F5F5F5'> 
          Moussa 2022 All Rights reserved.
            </Typography> 
          </Item>

        </Grid>

        

        <Grid item xs={6} sm={4} lg={4}>
          <Item>
            <Link to="#" className={Menu.footer_menu}>Privacy</Link>
            <Link to="#" className={Menu.footer_menu}>Terms</Link>
          </Item>
        </Grid>
        <Grid item xs={12}  sm={4} lg={4} display="flex">
          <Item> 
            <FacebookRoundedIcon sx={{color:'#F5F5F5'}}></FacebookRoundedIcon> 
            </Item>
          <Item> <YouTubeIcon sx={{color:'#F5F5F5'}}></YouTubeIcon> </Item>
          <Item> <TwitterIcon sx={{color:'#F5F5F5'}}></TwitterIcon> </Item>
          <Item><LinkedInIcon sx={{color:'#F5F5F5'}}></LinkedInIcon></Item>
        </Grid>
        

      </Grid>
    </Box>
  );
}
