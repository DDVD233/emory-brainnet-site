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
        <h1 style={{padding: '20px'}}>Team</h1>
        {/*  Horizontal align PersonCard */}

        <Divider style={
            {
                width: '100%',
                marginTop: '50px',
                marginBottom: '50px',
            }
        }/>

        <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            {...{ timeout: 1000 }}
        >

            <Grid container spacing={1} justifyContent={'center'}>
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

                <PersonCard
                    name="Antonio Aodong Chen Gu"
                    email="tony.chen.gu@emory.edu"
                    photo=""
                    position="Bachelor Student in Computer Science"
                    link={''}
                />

                <PersonCard
                    name="Joshua Lukemire"
                    email="joshua.lukemire@emory.edu"
                    photo=""
                    position="PhD Student in Computer Science"
                    link={''}
                />

                <PersonCard
                    name="Liang Zhan"
                    email="liang.zhan@pitt.edu"
                    photo=""
                    position="Assistant Professor in EECS"
                    link={'https://www.engineeringx.pitt.edu/People/Faculty/Profiles/Liang-Zhan/'}
                />

                <PersonCard
                    name="Lifang He"
                    email="lih319@lehigh.edu"
                    photo=""
                    position="Assistant Professor in Computer Science and Engineering"
                    link={'https://engineering.lehigh.edu/faculty/lifang-he'}
                />

                <PersonCard
                    name="Ying Guo"
                    email="yguo2@emory.edu"
                    photo=""
                    position="Professor in Biostatistics and Bioinformatics"
                    link={'https://sph.emory.edu/faculty/profile/index.php?FID=ying-guo-629'}
                />

                <PersonCard
                    name="Carl Yang"
                    email="j.carlyang@emory.edu"
                    photo=""
                    position="Assistant Professor in Computer Science"
                    link="https://www.cs.emory.edu/~jyang71/"
                />
            </Grid>
        </Grow>

    </Container>
  )
}

export default TeamPage