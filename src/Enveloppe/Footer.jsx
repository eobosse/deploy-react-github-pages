import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Divider, Icon } from 'antd';
import LogoSvg from '../images/logo.svg';
import TJLogo from '../images/TJ_logo.svg';

export default class Footer extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div  style={{height: "8vh"}} id="footer">
                    <Divider>
                        <img src={LogoSvg} height="50px" alt={""}/>
                    </Divider>
                </div>
                <div style={{paddingLeft: "7.2vw"}}>
                    <Container>
                        <Row style={{height: "5vh"}}>
                            <Col xs="3" />
                            <Col xs="2" >
                                <a href="https://www.facebook.com/theatrepointvirgule/" target="_blank" rel="noopener noreferrer" color="#000-000">
                                    <Icon type="facebook" style={{ fontSize: '24px', color: 'black'}}/>
                                </a>
                            </Col>
                            <Col xs="2">
                                <a href="https://www.instagram.com/theatrepoint.virgule/" target="_blank"  rel="noopener noreferrer">
                                    <Icon type="instagram" style={{ fontSize: '24px', color: 'black'}}/>
                                </a>
                            </Col>
                            <Col xs="2">
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                    <Icon type="youtube" style={{ fontSize: '24px', color: 'black'}}/>
                                </a>
                            </Col>
                            <Col xs="3"/>            
                        </Row>
                        <Row style={{paddingLeft: "3.5vw", height: "5vh"}}>
                            <Col sm={{ size: 'auto', offset: 4 }}>
                                <div style={{fontSize: "16px", fontWeight: "bold"}}>
                                    Nos partenaires
                                </div>
                            </Col>
                        </Row>
                        <Row style={{paddingLeft: "1vw", height: "8vh"}}>
                            <Col sm={{ size: 'auto', offset: 4 }}>
                                <a href="https://www.teljeunes.com/Accueil"  target="_blank" rel="noopener noreferrer">
                                    <img src={TJLogo} height="30px" alt={""}/>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        )
    }

}