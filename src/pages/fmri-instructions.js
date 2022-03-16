import React from 'react'
import { Container } from '@mui/material'
import { graphql } from 'gatsby'

const FmriInstructions = ({ data }) => {
    return (
        <Container component="article" dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html
        }}/>
    )
}

export default FmriInstructions
export const pageQuery = graphql`
    query FmriInstructionsPageQuery {
        markdownRemark(fileAbsolutePath: {regex: "/posts/fmri_instruction.md$/"}) {
            html
        }
    }
`

