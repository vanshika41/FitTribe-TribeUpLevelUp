import React, {useState} from 'react'
import {Box} from '@mui/material'
import Exercise from './../fithubComponents/Exercise'
import HeroBanner from './../fithubComponents/HeroBanner'
import SearchExercise from './../fithubComponents/SearchExercise'
const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercise/>
      <Exercise/>
    </Box>
  )
}

export default Home