import { Box } from '@mui/material'
import React from 'react'
import SearchExercices from '../Components/SearchExercices'
import Exercices from '../Components/Exercices'
import Price_plan from '../Components/Price_plan'
const Pricing = () => {
  return (
    <Box>
        <Price_plan/>
        <SearchExercices/>
        <Exercices/>
    </Box>
  )
}

export default Pricing