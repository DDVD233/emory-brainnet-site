import React from 'react'
import { Container, Divider } from '@mui/material'
import EnhancedTable, { createData } from '../components/leaderboard'

const LeaderBoardsPage = () => {
    const [rows, setRows] = React.useState(
        {
            'HIV': [
                createData("Connection Profile-Node Concat w/ attn-Concat Pooling", 71.43, 9.04, 82.04, 11.21, "", "March 12, 2022"),
                createData("BrainNetCNN", 60.21, 17.16, 70.93, 4.01, "https://doi.org/10.1016/j.neuroimage.2016.09.046", "March 12, 2022"),
                createData("BrainGNN", 62.98, 11.15, 68.93, 9.16, "https://doi.org/10.1016/j.media.2021.102233", "March 12, 2022")
            ],
            'PNC': [
                createData("Connection Profile-Node Concat-Concat Pooling", 70.63, 2.35, 78.32, 1.42, "", "March 12, 2022"),
                createData("BrainNetCNN", 71.93, 4.90, 78.50, 3.28, "https://doi.org/10.1016/j.neuroimage.2016.09.046", "March 12, 2022"),
                createData("BrainGNN", 70.62, 4.85, 77.53, 3.23, "https://doi.org/10.1016/j.media.2021.102233", "March 12, 2022")
            ],
            'PPMI': [
                createData("Connection Profile-Node Concat-Concat Pooling", 78.41, 1.62, 68.34, 1.89, "", "March 12, 2022"),
                createData("BrainNetCNN", 77.24, 2.09, 58.76, 8.95, "https://doi.org/10.1016/j.neuroimage.2016.09.046", "March 12, 2022"),
                createData("BrainGNN", 79.17, 1.22, 45.26, 3.65, "https://doi.org/10.1016/j.media.2021.102233", "March 12, 2022")
            ],
            'ABCD': [
                createData("Connection Profile-Node edge concat w/ attn-Concat Pooling", 83.10, 0.47, 91.85,  0.29, "", "Feb 22, 2022"),
                createData("BrainNetCNN", 85.10, 0.92, 93.5, 0.34, "https://doi.org/10.1016/j.neuroimage.2016.09.046", "March 12, 2022")
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