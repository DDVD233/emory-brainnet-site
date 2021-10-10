import {
  AppBar, Box,
  Button,
  CssBaseline, IconButton, Link,
  ScopedCssBaseline,
  Toolbar
} from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles'
import React from 'react'
import LogoIcon from './LogoIcon'

export const Root = ({ element }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ScopedCssBaseline>
        <CssBaseline/>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit">
              <Link href='/' align='center'>
                <LogoIcon/>
              </Link>
            </IconButton>
            <Button color="inherit">
              <Link href="/get-started" color="inherit">
                Gat Started
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
        <Box component="main">
          {element}
        </Box>
      </ScopedCssBaseline>
    </StyledEngineProvider>
  )
}

export default Root
