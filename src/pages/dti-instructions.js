import React from 'react'
import { Container } from '@mui/material'
import { graphql } from 'gatsby'

const DtiInstructions = ({ data }) => {
    return (
        <Container component="article" dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html
        }}/>
    )
}

export default DtiInstructions
export const pageQuery = graphql`
    query DtiInstructionsPageQuery {
        markdownRemark(fileAbsolutePath: {regex: "/posts/dti_instructions.md$/"}) {
            html
        }
    }
`

