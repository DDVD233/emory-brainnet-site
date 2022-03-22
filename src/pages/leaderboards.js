import React from 'react'
import { Container, Divider, Grow, Grid } from '@mui/material'
import EnhancedTable from '../components/leaderboard'
import PersonCard from '../components/PersonCard'

const TeamPage = () => {
  return (
    <Container style={
        {
            alignItems: 'center',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }
    }>
        <h1 style={{padding: '20px'}}>Team</h1>
        {/*  Horizontal align PersonCard */}

        <Divider style={
            {
                width: '100%',
                marginTop: '50px',
                marginBottom: '50px',
            }
        }/>

        <EnhancedTable/>

    </Container>
  )
}

export default TeamPage