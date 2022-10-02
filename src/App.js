// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import SearchExercices from './Components/SearchExercices';
import Footer from './Components/Footer'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
// import RalewayWoff2 from './fonts/Raleway-Regular.woff2';
import { ThemeProvider,createTheme  } from '@mui/material/styles';
import { CustomProvier } from './Components/Custom_theme';
import Details from './Pages/Details';
import Pricing from './Pages/Pricing';
import Schedule from './Pages/Schedule'

// import yellowtail from "typeface-yellowtail";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Not_Found from './Pages/Not_Found';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Raleway',
      "Roboto",
      'cursive',
    ].join(','),
  },
});



function App() {
  return (
    // <ThemeProvider theme={theme} >
     <CustomProvier> 
    <React.Fragment >
    <CssBaseline />
    <Container maxWidth="xl"  sx={{
      backgroundColor:"#F5F5F5",
    }}>
    <Box
      sx={{
        width: "100%",
        // height: 300,
        // margin:"auto",
        // backgroundColor: 'primary.dark',
        paddingTop:'30px',
        // '&:hover': {
        //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
        backgroundColor:"#F5F5F5",
        
      }}
    >
  <BrowserRouter>
  <Navbar/>
  <Routes>
      
        <Route path='/' element={<Home/>} />
        <Route path="/exercice/:id" element={<Details/>} />
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/schedule" element={<Schedule/>}></Route>
        <Route path='*' element={<Not_Found/>}> </Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
  </Box>
    </Container>
  </React.Fragment>
  </CustomProvier>
  //  </ThemeProvider>
  );
}

export default App;
