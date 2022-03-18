import React from 'react'
import { Container, Divider, Grow, Grid } from '@mui/material'
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
                  link="https://www.cs.emory.edu/~jyang71/"
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

        <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            {...{ timeout: 500 }}
        >

            <Grid container spacing={3} justifyContent={'center'}>
                <PersonCard
                    name="Hejie Cui"
                    email="hejie.cui@emory.edu"
                    photo=""
                    position="PhD Student in Computer Science"
                    link={'https://hejiecui.com/'}
                />

                <PersonCard
                    name="Wei Dai"
                    email="wei.dai@emory.edu"
                    photo=""
                    position="Bachelor Student in Computer Science and Mathematics"
                    link={'https://dd.works/'}
                />

                <PersonCard
                    name="Yanqiao Zhu"
                    email="yanqiao.zhu@cripac.ia.ac.cn"
                    photo=""
                    position="Master Student in Computer Science"
                    link={'https://sxkdz.github.io/'}
                />

                <PersonCard
                    name="Xuan Kan"
                    email="xuan.kan@emory.edu"
                    photo=""
                    position="PhD Student in Computer Science"
                    link={'http://kanxuan.live/'}
                />
            </Grid>
        </Grow>

    </Container>
  )
}

export default TeamPage