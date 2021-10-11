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

import headerImage from '../images/header-image.svg'

const headerHeight = '400px'

const useStyles = makeStyles({
  title: {
    '&:before': {
      content: '""',
      position: 'absolute',
      height: headerHeight,
      width: '100%',
      backgroundImage: `url(${headerImage})`,
      opacity: '.45',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
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
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight={headerHeight}
        spacing={3}
        className={classes.title}
      >
        <Grid item>
          <Typography variant={isSmallScreen ? 'h3' : 'h1'} textAlign="left">
            Brain Network
          </Typography>
        </Grid>
        <Grid>
          <Button
            variant="contained"
            component="a"
            href="/get-started"
          >
            Get Started
          </Button>
        </Grid>
      </Grid>
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
