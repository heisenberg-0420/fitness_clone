import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = ({targetMuscle, equipmentExercises, exerciseDetail}) => {
  return (
    <Box sx={{ mt: {lg: '100px', xs: '0'}}}>
      <Typography variant='h3' mb={5}>Similar Exercises for <span style={{color: '#ff2625', textTransform: 'capitalize'}}>{exerciseDetail.target}</span></Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
        {targetMuscle.length ? <HorizontalScrollBar data={targetMuscle} /> : <Loader />}
      </Stack>
      <Typography variant='h3' mb={5}>Exercises that use the same equipment</Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
        {equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises