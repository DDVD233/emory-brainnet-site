import React from 'react'
import { Container, Divider } from '@mui/material'
import EnhancedTable, { createData } from '../components/leaderboard'

const LeaderBoardsPage = () => {
    const [rows, setRows] = React.useState(
        {
            'HIV': [
                createData("Connection Profile-Node Concat w/ attn-Concat Pooling", 71.43, 9.04, 82.04, 11.21, "", "March 12, 2022")
            ],
            'PNC': [
                createData("Connection Profile-Node Concat-Concat Pooling", 70.63, 2.35, 78.32, 1.42, "", "March 12, 2022")
            ],
            'PPMI': [
                createData("Connection Profile-Node Concat-Concat Pooling", 78.41, 1.62, 68.34, 1.89, "", "March 12, 2022")
            ],
            'ABCD': [
                createData("Connection Profile-Node edge concat w/ attn-Concat Pooling", 83.10, 0.47, 91.85,  0.29, "", "Feb 22, 2022")
            ],
        }
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
        <h1 style={{padding: '50px'}}>Leaderboards</h1>

        <Divider style={
            {
                width: '100%',
                marginTop: '10px',
                marginBottom: '50px',
            }
        }/>

        <EnhancedTable rows={rows}/>

    </Container>
  )
}

export default LeaderBoardsPage