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
import { ThemeProvider } from '@mui/styles'
import { Helmet } from 'react-helmet'

import 'katex/dist/katex.min.css'
import 'prismjs/themes/prism-solarizedlight.css'

export const Root = ({ element }) => {
  return (
      <Box component="main">
        {element}
      </Box>
  )
}

export default Root
