import React from 'react'
import { Box } from '@mui/material'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  return (
    <Box component="article" dangerouslySetInnerHTML={{
      __html: data.markdownRemark.html
    }}/>
  )
}

export default IndexPage
export const pageQuery = graphql`
    query IndexPageQuery {
        markdownRemark(fileAbsolutePath: {regex: "/posts/index.md$/"}) {
            html
        }
    }
`
