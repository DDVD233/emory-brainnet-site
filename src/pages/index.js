import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  return (
    <Grid flexDirection="column"
          alignItems="center"
          spacing={2}
          container>
      <Grid item>
        <Typography variant="h2">
          {data.site.siteMetadata.title}
        </Typography>
      </Grid>
      <Grid item>
        <Box component="article" dangerouslySetInnerHTML={{
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
