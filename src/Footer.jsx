import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Divider, Icon } from 'antd';
import LogoSvg from './images/logo.svg';

export default class Footer extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div  style={{height: "75px"}} id="footer">
                    <Divider>
                        <img src={LogoSvg} height="50px"/>
                    </Divider>
                </div>
                <div style={{paddingLeft: "137px"}}>
                    <Container>
                        <Row style={{height: "50px"}}>
                            <Col xs="3" />
                            <Col xs="2" >
                                <a href="https://www.facebook.com" target="_blank" color="#000-000">
                                    <Icon type="facebook" style={{ fontSize: '24px', color: 'black'}}/>
                                </a>
                            </Col>
                            <Col xs="2">
                                <a href="https://www.instagram.com/theatrepoint.virgule/" target="_blank" >
                                    <Icon type="instagram" style={{ fontSize: '24px', color: 'black'}}/>
                                </a>
                            </Col>
                            <Col xs="2">
                                <a href="https://twitter.com" target="_blank" >
                                    <Icon type="twitter" style={{ fontSize: '24px', color: 'black'}}/>
                                </a>
                            </Col>
                            <Col xs="3"/>            
                        </Row>
                        <Row style={{paddingLeft: "65px", height: "30px"}}>
                            <Col sm={{ size: 'auto', offset: 4 }}>
                                <div style={{fontSize: "16px", fontWeight: "bold"}}>
                                    Pour nous joindre
                                </div>
                            </Col>
                        </Row>
                        <Row style={{height: "75px"}}>
                            <Col sm={{ size: 'auto', offset: 4 }}>
                                <a style={{fontSize: "16px", color: "inherit"}} href="mailto:theatrepointvirgule@gmail.com" >
                                    theatrepointvirgule@gmail.com
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        )
    }

}