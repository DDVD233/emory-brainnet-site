import React from 'react'
import { Grid, Button, Container, Typography } from '@mui/material'

const NotFoundPage = () => {
  return (
    <Container component="main">
      <Grid flexDirection="column" spacing={5} container>
        <Grid item>
          <Typography variant="h3">
            Page Not Found (404)
          </Typography>
        </Grid>
        <Grid item>
          <Button component="a" href="/">
            Back to Home
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default NotFoundPage
