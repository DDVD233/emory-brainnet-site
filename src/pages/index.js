import React from 'react'
import {
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery
} from '@mui/material'
import { makeStyles, useTheme } from '@mui/styles'
import { graphql } from 'gatsby'
import Typewriter from "typewriter-effect";

import headerImage from '../images/header-image.svg'

const headerHeight = '500px'

const useStyles = makeStyles({
  title: {
    '&:after': {
      content: '""',
      position: 'absolute',
      height: headerHeight,
      width: '100%',
      opacity: '.45',
      // backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: '#e3f2fd'
    }
  }
})

const IndexPage = ({ data }) => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const classes = useStyles()
  return (
    <Grid
      flexDirection="column"
      justifyContent="center"
      spacing={2}
      container
    >
      <Grid flexDirection="row" display='flex' style={{ backgroundColor: '#f6fafd'}} container>
        <Container item style={{width: '40%', marginBottom: "40px", marginTop: "80px" }}>
          <img src={headerImage} alt="header"/>
        </Container>
        <Grid
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="left"
          display='flex'
          // spacing={3}
          width='50%'
          marginLeft="40px"
          spacing={0}
        >
          <Grid item style={{
            fontFamily: 'Courier New',
            fontWeight: 'bolder',
            fontSize: '100px',
            color: '#1e376d',
          }}>
            <Typewriter
                options={{
                  strings: 'BrainGB',
                  autoStart: true,
                  loop: false,
                }}
            />
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              component="a"
              href="/get-started"
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <div style={{ height: "20px" }} />

      <Grid item>
        <Container component="article" dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html
        }}/>
      </Grid>
    </Grid>
  )
}

export default IndexPage
export const pageQuery = graphql`
    query IndexPageQuery {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(fileAbsolutePath: {regex: "/posts/index.md$/"}) {
            html
        }
    }
`
