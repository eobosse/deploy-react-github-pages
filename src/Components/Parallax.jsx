import React from 'react';

export default class Parallax extends React.Component {

    constructor(props) {
        super(props);
      }

    render() {
        let divStyle = {
        /* The image used */
            'background-image': 'url(' + this.props.image + ')',
            'background-size': '100vw auto',
        /* Set a specific height */
            'min-height': '28vw', 
        /* Create the parallax scrolling effect */
            'background-attachment': 'fixed', 
            'background-repeat': 'no-repeat'
        };
        return (
            <div className="parallax" style={divStyle}/>
        )
    }
}