import React from 'react'
import { Container, Divider } from '@mui/material'
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
        <h1>Team</h1>
        {/* Spacing */}
        <div style={{height: '20px'}}/>
        <h2>Faculty</h2>
          {/*  Horizontal align PersonCard */}
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
              <PersonCard
                  name="Carl Yang"
                  email="j.carlyang@emory.edu"
                  photo=""
                  position="Director"
              />
          </div>

        <Divider style={
            {
                width: '100%',
                marginTop: '50px',
                marginBottom: '50px',
            }
        }/>

        <h2>Students</h2>

        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
            <PersonCard
                name="Hejie Cui"
                email="hejie.cui@emory.edu"
                photo=""
                position="PhD Student"
            />
        </div>

    </Container>
  )
}

export default TeamPage