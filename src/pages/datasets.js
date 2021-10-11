import React from 'react'
import { Container } from '@mui/material'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  return (
    <Container component="article" dangerouslySetInnerHTML={{
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
