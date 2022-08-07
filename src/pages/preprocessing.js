import React from 'react'
import { Container, ToggleButton, ToggleButtonGroup} from '@mui/material'
import { graphql } from 'gatsby'
import { useState } from 'react';

const Preprocessing = ({ data }) => {
    function handleChange(event, newValue) {
        setArticle(newValue);
        if (newValue === "Structural") {
            setHtml(data.allMarkdownRemark.nodes
                .filter(node => node.html.includes("DTI Brain Network Construction"))[0].html
            );
        } else {
            setHtml(data.allMarkdownRemark.nodes
                .filter(node => node.html.includes("fMRI Brain Network Construction"))[0].html
            );
        }
    }

    const [article, setArticle] = useState("Functional")
    const [html, setHtml] = useState(data.allMarkdownRemark.nodes
        .filter(node => node.html.includes("fMRI Brain Network Construction"))[0].html
    );
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

export default Preprocessing
export const pageQuery = graphql`
    query FmriInstructionsPageQuery {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/posts/([a-z])+_instructions.md$/"}}
      ) {
        nodes {
          html
        }
      }
    }
`

