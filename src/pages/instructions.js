import React from 'react'
import { Container, ToggleButton, ToggleButtonGroup} from '@mui/material'
import { graphql } from 'gatsby'
import { useState } from 'react';

const Instructions = ({ data }) => {
    function handleChange(event, newValue) {
        setArticle(newValue);
        if (newValue === "Structural") {
            setHtml(data.allMarkdownRemark.edges[0].node.html)
        } else {
            setHtml(data.allMarkdownRemark.edges[0].next.html)
        }
    }

    const [article, setArticle] = useState("Functional")
    const [html, setHtml] = useState(data.allMarkdownRemark.edges[0].next.html)
    return (
        <Container style={
            {
                alignItems: 'center',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
            }
        }>
            <Container style={{paddingTop: '20px'}}>
                <h1>Brain Network Construction Instructions</h1>

                Please select the construction method from the following options:
            </Container>

            {/*Add 10 px empty div */}

            <ToggleButtonGroup
                style={{padding: '20px'}}
                color="primary"
                value={article}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value="Functional">Functional</ToggleButton>
                <ToggleButton value="Structural">Structural</ToggleButton>
            </ToggleButtonGroup>

        <Container component="article" dangerouslySetInnerHTML={{
            __html: html
        }}/>
        </Container>
    )
}

export default Instructions
export const pageQuery = graphql`
    query FmriInstructionsPageQuery {
            allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/posts/([a-z])+_instructions.md$/"}}
          ) {
            edges {
              next {
                html
              }
              node {
                html
              }
            }
      }
    }
`

