import React from 'react'
import { Container, Divider } from '@mui/material'
import EnhancedTable, { createData } from '../components/leaderboard'

const LeaderBoardsPage = () => {
    const [rows, setRows] = React.useState(
        [
            createData("Test", 0.92, 0.01, 0.83, 0.03, "", "Feb 22, 2022")
        ]
    )

  return (
    <Container style={
        {
            alignItems: 'center',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }
    }>
        <h1 style={{padding: '20px'}}>Leaderboards</h1>

        <Divider style={
            {
                width: '100%',
                marginTop: '50px',
                marginBottom: '50px',
            }
        }/>

        <EnhancedTable rows={rows}/>

    </Container>
  )
}

export default LeaderBoardsPage