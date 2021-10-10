import React from 'react'
import { Box } from '@mui/material'
import '../styles/index.css'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const IndexPage = ({ data }) => {
  return (
    <Box component="article">
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Box>
  )
}

export default IndexPage
export const pageQuery = graphql`
    query MDXQuery {
        mdx(fileAbsolutePath: {regex: "/posts/index.mdx/"}) {
            body
        }
    }
`
