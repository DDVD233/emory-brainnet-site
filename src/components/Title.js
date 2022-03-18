
import React from "react";

// React Component: Title
// Type: Functional Component
// Description:
// 		A functional component that renders a title.
// 		It takes a string as a prop.
// 		It returns a <h1> element.

export default class LargeTitle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title
        }
    }

    // render() {
    //     return (
    //     //    Big title with a line below
    //     //     <div className="large-title">
    //     //         <h1>{this.state.title}</h1>
    //     //         <div className="line"></div>
    //     //     </div>
    //     // )
    //
    //     )
    // }
}

