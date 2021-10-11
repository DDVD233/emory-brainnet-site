import React from 'react'
import { Container } from '@mui/material'
import { graphql } from 'gatsby'

const GetStarted = ({ data }) => {
    return (
        <Container component="article" dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html
        }}/>
    )
}

export default GetStarted
export const pageQuery = graphql`
    query GetStartedPageQuery {
        markdownRemark(fileAbsolutePath: {regex: "/posts/get_started.md$/"}) {
            html
        }
    }
`

