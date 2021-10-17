import React from 'react'
import { Container } from '@mui/material'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
    return (
        <Container maxWidth='md' component="article" dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html
        }}/>
    )
}

export default IndexPage
export const pageQuery = graphql`
    query TeamPageQuery {
        markdownRemark(fileAbsolutePath: {regex: "/posts/team.md$/"}) {
            html
        }
    }
`
