import React from 'react';
import { Col, Row } from 'reactstrap';


export default class Person extends React.Component {
    render() {
        return (
            <div className={this.props.name}>
                <div className="section-content">
                    <Row>
                        <Col md={2}>
                            <img src={this.props.imagePath} style={{height: 200}}/>
                        </Col>
                        <Col md={10}>
                            <p>{this.props.description}</p>
                        </Col>
                    </Row>
                    <div className="resp-titre-fond-transparent">{this.props.name}</div>
                    <div className="resp-titre-fond-blanc">{this.props.title}</div>
                </div>
            </div>
        )
    }
}