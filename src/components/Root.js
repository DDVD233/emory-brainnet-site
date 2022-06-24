import {
  AppBar, Box,
  Button, Container,
  CssBaseline, Grid, IconButton,
  ScopedCssBaseline,
  Toolbar, Typography, SwipeableDrawer, ListItem,
  ListItemText, List
} from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles'
import React from 'react'
import CSLogoIcon from "./CSLogoIcon";
import { ThemeProvider } from '@mui/styles'
import { Helmet } from 'react-helmet'
import { useMediaQuery } from 'react-responsive';
import MenuIcon from '@mui/icons-material/Menu';

import 'katex/dist/katex.min.css'
import 'prismjs/themes/prism-solarizedlight.css'
import theme from "../theme";

const links = [
  {
    href: '/get-started',
    label: 'Get Started',
  },
  {
    href: '/advanced',
    label: 'Advanced',
  },
  {
    href: '/datasets',
    label: 'Datasets',
  },
  {
    href: '/preprocessing',
    label: 'Preprocessing',
  },
  {
    href: '/models',
    label: 'Models',
  },
  {
    href: '/leaderboards',
    label: 'Leaderboards',
  },
  {
    href: '/team',
    label: 'Team',
  },
  {
    href: 'https://brainnn.us',
    label: 'Workshop',
  }
]

function MainMenu() {
  const isSmallScreen = useMediaQuery({ query: `(max-width: 760px)` });
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };


  if (!isSmallScreen) {
    return (
        links.map(({ href, label }) => (
            <Button color="inherit" href={href}>
              {label}
            </Button>
    )))
  } else {
    return (
        <React.Fragment>
          <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
          >
            <MenuIcon/>
          </IconButton>
          <SwipeableDrawer
              anchor={'right'}
              open={open}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
          >
            <List>
              {links.map(({ href, label }) => (
                  <a href={href} style={{ color: '#696969'}}>
                    <ListItem button key={label}>
                      {/*<ListItemIcon>*/}
                      {/*  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
                      {/*</ListItemIcon>*/}
                      <ListItemText primary={label} />
                    </ListItem>
                  </a>
              ))}
            </List>
          </SwipeableDrawer>
        </React.Fragment>
    )
  }
}

export const Root = ({ element }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
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
          <AppBar component="nav" position="sticky">
            <Toolbar>
              <Grid container alignItems="center">
              <IconButton href="/" style={{ borderRadius: 2}}>
                {/* Horizontally center align */}
                <Container style={
                  {
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'row'
                  }
                }>
                  <CSLogoIcon width={50} height={50}/>
                  <p style={{color: 'white', marginBottom: '0rem', fontFamily: 'Courier New', fontWeight: 'bolder'}}>BrainGB</p>
                </Container>
              </IconButton>
              <Typography sx={{ flexGrow: 1 }}/>
              <MainMenu/>
              </Grid>
            </Toolbar>
          </AppBar>
          <Toolbar/>
          <Box component="main">
            {element}
          </Box>
          <Grid
            component="footer"
            container
            flexDirection="column"
            alignItems="center"
          >
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
