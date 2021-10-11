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
    query GetStartedPageQuery {
        markdownRemark(fileAbsolutePath: {regex: "/posts/get_started.md$/"}) {
            html
        }
    }
`

