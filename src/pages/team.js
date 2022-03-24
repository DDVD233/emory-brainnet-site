import React from 'react'
import { Container, Divider, Grow, Grid } from '@mui/material'
import PersonCard from '../components/PersonCard'
import CbisLogo from '../images/CBIS_logo_blue.png'
import CsLogo from '../images/logo_cs_blue.png'

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
        <h1 style={{padding: '40px'}}>Team</h1>
        {/*  Horizontal align PersonCard */}

        <Divider style={
            {
                width: '100%',
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
                    photo="/people/HejieCui.jpeg"
                    position="Emory University"
                    link={'https://hejiecui.com/'}
                />

                <PersonCard
                    name="Wei Dai"
                    email="wei.dai@emory.edu"
                    photo=""
                    position="Emory University"
                    link={'https://dd.works/'}
                />

                <PersonCard
                    name="Yanqiao Zhu"
                    email="yanqiao.zhu@cripac.ia.ac.cn"
                    photo=""
                    position="UCLA"
                    link={'https://sxkdz.github.io/'}
                />

                <PersonCard
                    name="Xuan Kan"
                    email="xuan.kan@emory.edu"
                    photo="/people/XuanKan.jpeg"
                    position="Emory University"
                    link={'http://kanxuan.live/'}
                />

                <PersonCard
                    name="Antonio Aodong Chen Gu"
                    email="tony.chen.gu@emory.edu"
                    photo=""
                    position="Emory University"
                    link={''}
                />

                <PersonCard
                    name="Joshua Lukemire"
                    email="joshua.lukemire@emory.edu"
                    photo=""
                    position="Emory University"
                    link={''}
                />

                <PersonCard
                    name="Liang Zhan"
                    email="liang.zhan@pitt.edu"
                    photo="/people/LiangZhan.jpeg"
                    position="University of Pittsburgh"
                    link={'https://www.engineeringx.pitt.edu/People/Faculty/Profiles/Liang-Zhan/'}
                />

                <PersonCard
                    name="Lifang He"
                    email="lih319@lehigh.edu"
                    photo={'/people/LifangHe.jpg'}
                    position="Lehigh University"
                    link={'https://engineering.lehigh.edu/faculty/lifang-he'}
                />

                <PersonCard
                    name="Ying Guo"
                    email="yguo2@emory.edu"
                    photo=""
                    position="Emory University"
                    link={'https://sph.emory.edu/faculty/profile/index.php?FID=ying-guo-629'}
                />

                <PersonCard
                    name="Carl Yang"
                    email="j.carlyang@emory.edu"
                    photo=""
                    position="Emory University"
                    link="https://www.cs.emory.edu/~jyang71/"
                />
            </Grid>
        </Grow>

        <h1 style={{ margin: '50px' }}>Support</h1>

        <Divider style={
            {
                width: '100%',
                marginBottom: '30px',
            }
        }/>

        <Container container
                   style={{ marginTop: '50px', justifyContent: 'center', display: 'flex' }}>
            <Container item xs={8} sm={4}>
                <a href={'https://www.cs.emory.edu/home/'}>
                    <img src={CsLogo} alt="CS"/>
                </a>
            </Container>
            <Container item xs={8} sm={3}>
                <a href={'http://web1.sph.emory.edu/bios/CBIS/index.html'}>
                    <img src={CbisLogo} alt="CBIS"/>
                </a>
            </Container>
        </Container>

    </Container>
  )
}

export default TeamPage