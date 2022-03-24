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
    query AdvancedPageQuery {
        markdownRemark(fileAbsolutePath: {regex: "/posts/advanced.md$/"}) {
            html
        }
    }
`