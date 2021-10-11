import {
  AppBar, Box,
  Button,
  CssBaseline, IconButton, Link,
  ScopedCssBaseline, styled,
  Toolbar, Typography
} from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles'
import React from 'react'
import LogoIcon from './LogoIcon'
import 'katex/dist/katex.min.css'

const BarLink = styled(Link)({
  textDecoration: 'none'
})

export const Root = ({ element }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ScopedCssBaseline>
        <CssBaseline/>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit">
              <BarLink href="/" align="center"
                       style={{ display: 'flex', alignItems: 'center' }}>
                <LogoIcon width={35} height={35}/>
              </BarLink>
            </IconButton>
            <Typography sx={{ flexGrow: 1 }}/>
            <Button color="inherit">
              <BarLink href="/get-started"
                       color="inherit">
                Gat Started
              </BarLink>
            </Button>
            <Button color="inherit">
              <BarLink color="inherit"
                       href="/datasets">
                Datasets
              </BarLink>
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
