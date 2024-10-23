import { Grid2 } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export const Dashboard = () => {

  const userProfile = useSelector(state=> state.user)
  console.log(userProfile)
  return (
   <Grid2>Welcome {userProfile?.userData?.name}
   </Grid2>
  )
}
