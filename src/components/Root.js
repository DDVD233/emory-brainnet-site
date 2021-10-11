import {
  AppBar, Box,
  Button, createTheme,
  CssBaseline, Grid, IconButton,
  ScopedCssBaseline,
  Toolbar, Typography
} from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles'
import React from 'react'
import LogoIcon from './LogoIcon'
import 'katex/dist/katex.min.css'
import { ThemeProvider } from '@mui/styles'
import { Helmet } from 'react-helmet'

export const Root = ({ element }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme()}>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
          <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </Helmet>
        <ScopedCssBaseline>
          <CssBaseline/>
          <AppBar position="static">
            <Toolbar>
              <IconButton color="inherit"
                          href="/"
                          style={{ display: 'flex', alignItems: 'center' }}>
                <LogoIcon width={35} height={35}/>
              </IconButton>
              <Typography sx={{ flexGrow: 1 }}/>
              <Button color="inherit" href="/get-started">
                Gat Started
              </Button>
              <Button color="inherit" href="/datasets">
                Datasets
              </Button>
            </Toolbar>
          </AppBar>
          <Toolbar/>
          <Box component="main">
            {element}
          </Box>
          <Grid container flexDirection="column" alignItems="center">
            <Grid item>
              <Typography variant="caption" textAlign="center">
                Brain Network 2021 | Powered by Gatsby
              </Typography>
            </Grid>
          </Grid>
        </ScopedCssBaseline>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Root
