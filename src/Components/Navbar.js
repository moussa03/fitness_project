import React, { useEffect } from 'react'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Logo from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';
import StyleNavbar from '../assets/css/Navbar.module.css'
import Grid from '@mui/material/Grid';
import { NavLink } from "react-router-dom";




const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow:"none",
  fontSize:"16px",
  backgroundColor:"#F5F5F5",
  textDecoration:"none"
}));


let activeStyle = {
  borderBottom: "2px solid #F44336",
  /* font-family: 'Cairo', sans-serif; */
  color: "#212121",
  position: "relative",
  padding: "5px 0px",
  fontFamily: "Raleway",
  fontWeight: "bold"
};


const Navbar = () => {
  

 
  return (
    <Grid container direction="row" backgroundColor="#F5F5F5">
    <Grid item xs={12} sm={12} md={6} lg={6} display="flex" direction="row"  sx={{
          height: "70px",
          alignItems: "flex-end",
          maxHeight:"70px"
    }}>
      <Grid item xs={4}  >
        <Item sx={{
        display:"flex",
        justifiContent:"flex-start"
      }}> <Link to='/'> <img className={StyleNavbar.logo_image } src={Logo}/></Link > </Item> 
      </Grid>

      <Grid item xs={8} display="flex" >
      <Grid item xs={6} ><Item ><NavLink className={StyleNavbar.menu} to='/'  style={({ isActive }) =>isActive ? activeStyle : undefined}> HOME </NavLink> </Item></Grid>
      <Grid item xs={6} ><Item><NavLink className={StyleNavbar.menu} to='pricing' style={({ isActive }) =>
              isActive ? activeStyle : undefined}> PRICING </NavLink> </Item></Grid>
      <Grid item xs={6} ><Item><NavLink className={StyleNavbar.menu} to="schedule" style={({ isActive }) =>isActive ? activeStyle : undefined}>NUTRITION FACTS</NavLink></Item></Grid>
      </Grid>

    </Grid>
   
    
  </Grid>
  )
}

export default Navbar