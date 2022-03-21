import {
    Paper, Avatar, Link
} from '@mui/material'
import React from "react";
import {blue} from "@mui/material/colors";

// React Component: PersonCard
// Type: Component
// Description:
// 		A card that displays a person's information

export default class PersonCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photo: this.props.photo,
            name: this.props.name,
            email: this.props.email,
            position: this.props.position,
            link: this.props.link,
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
                flexDirection: 'column',
            }}>
                {/* Round profile photo */}
                <Avatar
                    src={this.state.photo}
                    sx={{
                        width: '200px',
                        height: '200px',
                        fontSize: '70px',
                        bgcolor: '#1e376d',
                    }}
                >
                {/*    First letter of the first name and last name, font size 20 */}
                    {this.state.name.split(' ')[0][0] + this.state.name.split(' ')[1][0]}
                </Avatar>
                {/* Add spacings */}
                <div style={{
                    marginTop: '30px',
                    marginBottom: '10px',
                }}/>
                {/* Name with link */}
                <Link href={this.state.link} target="_blank" rel="noreferrer">
                    <h2>{this.state.name}</h2>
                </Link>
                <p>{this.state.email}</p>
                <p align="center">{this.state.position}</p>
            </Paper>
        )
    }
}
