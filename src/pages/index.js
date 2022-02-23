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
import Fade from '@mui/material/Fade';

import headerImage from '../images/header-image.svg'

const headerHeight = '500px'

const useStyles = makeStyles({
  title: {
    '&:after': {
      zIndex: 1,
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
  // const theme = useTheme()
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  // const classes = useStyles()
  return (
      <html> The Site is under construction. </html>
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
