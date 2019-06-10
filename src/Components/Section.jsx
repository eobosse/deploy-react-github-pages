import React from 'react';

export default class Section extends React.Component {
    render() {
        return (
            <div className={"section" + this.props.section}>
                <div className="section-content" id={this.props.id}>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.subtitle}</p>
                    <p>{this.props.citation}</p>
                    <p>{this.props.credit}</p>
                </div>
            </div>
        )
    }
}