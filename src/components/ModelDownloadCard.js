import {
    Paper
} from '@mui/material'
import React from "react";
import {Button} from "@mui/material";

// React Component: PersonCard
// Type: Component
// Description:
// 		A card that displays a person's information

export default class ModelDownloadCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name,
            link: this.props.link,
            image: this.props.image,
        }
    }

    render() {
        return (
            <Paper style={{
                margin: '10px',
                padding: '10px',
                width: '300px',
                alignItems: 'center',
                display: 'flex',
                marginBottom: '0px',
                flexDirection: 'column',
            }}>
                {/* Round profile photo */}
                <img src={this.state.image} style={{
                    height: '80px',
                    margin: '20px',
                    objectFit: 'contain'
                }} alt={this.state.name}/>
                {/* Name */}
                <h3 style={{
                    margin: '0px',
                    marginBottom: '10px',
                }}>{this.state.name}</h3>
                {/* Download button */}
                <Button variant="contained" color="primary" href={this.state.link} style={{
                    margin: '0px',
                    marginBottom: '10px',
                }}>
                    Download
                </Button>
            </Paper>
        )
    }
}

