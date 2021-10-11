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
    query DatasetsPageQuery {
        markdownRemark(fileAbsolutePath: {regex: "/posts/datasets.md$/"}) {
            html
        }
    }
`
