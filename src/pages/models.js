import React from 'react'
import { Container, Divider, Grow, Grid } from '@mui/material'
import ModelDownloadCard from "../components/ModelDownloadCard";

const Models = () => {
  return (
    <Container style={
        {
            alignItems: 'center',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }
    }>
        <h1 style={{padding: '40px'}}>Download Pre-trained Models</h1>
        {/*  Horizontal align PersonCard */}

        <Divider style={
            {
                width: '100%',
                marginBottom: '50px',
            }
        }/>

        <p style={{padding: '40px', alignSelf: 'flex-start'}}>
            Download our pre-trained models from the links below.
        </p>

        <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            {...{ timeout: 1000 }}
        >
            <Grid container spacing={1} justifyContent={'center'}>
                <ModelDownloadCard
                    name={'HIV'}
                    link={'https://firebasestorage.googleapis.com/v0/b/braingb-d2fc0.appspot.com/o/BrainGB_gat_HIV.pt?alt=media&token=3eb03a2b-0204-4494-8cc3-d9f1cba7fb5b'}
                    image={'/HIV-Sample.png'}
                />

                <ModelDownloadCard
                    name={'PNC'}
                    link={'https://firebasestorage.googleapis.com/v0/b/braingb-d2fc0.appspot.com/o/BrainGB_gcn_PNC.pt?alt=media&token=c85e66db-6203-4790-837b-e4a1b50882a4'}
                    image={'/nitrc-logo.png'}
                />

                <ModelDownloadCard
                    name={'PPMI'}
                    link={'https://firebasestorage.googleapis.com/v0/b/braingb-d2fc0.appspot.com/o/BrainGB_gcn_PPMI.pt?alt=media&token=4e093575-1e0e-4b1f-8129-2f96d71236f8'}
                    image={'/ppmi-logo.png'}
                />

                <ModelDownloadCard
                    name={'ABCD'}
                    link={'https://firebasestorage.googleapis.com/v0/b/braingb-d2fc0.appspot.com/o/BrainGB_gat_ABCD.pt?alt=media&token=e26b33de-15c7-4071-8acc-9b8fc7e4cdb7'}
                    image={'/logo_abcd_r_small.jpg'}
                />
            </Grid>
        </Grow>
    </Container>
  )
}

export default Models