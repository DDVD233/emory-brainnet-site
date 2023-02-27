import React from 'react'
import { Container, Divider, Grow, Grid } from '@mui/material'
import PersonCard from '../components/PersonCard'
// import CbisLogo from '../images/CBIS_logo_blue.png'
import {Helmet} from "react-helmet";

const titleName = "BrainGB - Team"

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
          <Helmet>
              <title>{titleName}</title>
          </Helmet>
          <h1 style={{padding: '40px'}}>Faculty</h1>
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
                      name="Lifang He"
                      photo={'/people/LifangHe.jpg'}
                      position="Lehigh University"
                      link={'https://engineering.lehigh.edu/faculty/lifang-he'}
                  />

                  <PersonCard
                      name="Liang Zhan"
                      photo="/people/LiangZhan.jpeg"
                      position="University of Pittsburgh"
                      link={'https://www.engineeringx.pitt.edu/People/Faculty/Profiles/Liang-Zhan/'}
                  />

                  <PersonCard
                      name="Ying Guo"
                      photo="/people/YingGuo.jpg"
                      position="Emory University"
                      link={'https://sph.emory.edu/faculty/profile/index.php?FID=ying-guo-629'}
                  />

                  <PersonCard
                      name="Carl Yang"
                      photo="/people/CarlYang.jpg"
                      title="Founding Director"
                      position="Emory University"
                      link="https://www.cs.emory.edu/~jyang71/"
                  />
              </Grid>
          </Grow>

          <h1 style={{padding: '40px', paddingTop: '100px'}}>Students</h1>
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

              <Grid container spacing={1} justifyContent={'center'} paddingBottom={'20px'}>
                  <PersonCard
                      name="Hejie Cui"
                      photo="/people/HejieCui.jpeg"
                      position="Emory University"
                      link={'https://hejiecui.com/'}
                  />

                  <PersonCard
                      name="Wei Dai"
                      photo="/people/WeiDai.png"
                      position="Emory University"
                      link={'https://dd.works/'}
                  />

                  <PersonCard
                      name="Yanqiao Zhu"
                      photo="/people/YanqiaoZhu.jpg"
                      position="UCLA"
                      link={'https://sxkdz.github.io/'}
                  />

                  <PersonCard
                      name="Xuan Kan"
                      photo="/people/XuanKan.jpeg"
                      position="Emory University"
                      link={'http://kanxuan.live/'}
                  />

                  <PersonCard
                      name="Tony Chen Gu"
                      photo="/people/TonyChen.jpeg"
                      position="Emory University"
                      link={''}
                  />

                  <PersonCard
                      name="Joshua Lukemire"
                      photo="/people/JoshLukemire.jpg"
                      position="Emory University"
                      link={''}
                  />
              </Grid>
          </Grow>
      </Container>
  )
}

export default TeamPage