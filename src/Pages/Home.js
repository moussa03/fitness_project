
import { Box } from '@mui/material'
import React from 'react'
import HeroBanner from '../Components/HeroBanner'
// import ExercicesDetails from '../Components/ExercicesDetails'
import SearchExercices from '../Components/SearchExercices'
import Horizontal_Scrollbar from '../Components/Horizontal_Scrollbar'
import { UseTheme } from '../Components/Custom_theme';
import Exercices from "../Components/Exercices"
// import ExercicesDetails from "./ExercicesDetails"



const Home = () => {
  // const [SearchValue,Search,SerchExercice,SetExercice,handleSearch,bodyParts,SetbodyParts,Databodypart]=UseTheme();


  return (
    <Box>
    <HeroBanner />
    <SearchExercices/>
    {/* <ExercicesDetails/> */}
    <Exercices/>
    </Box>
  )
}

export default Home
