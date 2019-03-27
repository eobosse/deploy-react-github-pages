import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import LogoSvg from './images/logo.svg';
import { Link, animateScroll as scroll } from 'react-scroll';
import { BrowserRouter as Router, NavLink as RouterLink, Route } from "react-router-dom";
import Home from './Home'
import Projects from './Projects';
import Join from './Join';

export default class Header extends React.Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <Router>
            <React.Fragment>
                <Navbar color="faded" fixed="top" light expand="md">
                    <NavbarBrand tag={RouterLink} to="/"  onClick={this.scrollToTop}>
                        <img src={LogoSvg} height="50px"/>
                    </NavbarBrand>
                    <Nav navbar>
                        <NavItem>
                            <Link
                                activeClass="active"
                                to="mission"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}>
                                <NavLink tag={RouterLink} to="/" style={{fontWeight: "bold"}}>
                                    Notre Mission
                                </NavLink>
                            </Link>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar >
                            <DropdownToggle nav caret style={{fontWeight: "bold"}}>
                                Nos Projets
                            </DropdownToggle>
                            <DropdownMenu right>
                            <Link
                                activeClass="active"
                                    to="confessional"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                    >
                                    <DropdownItem to="/nos-projets" onClick={this.scrollToTop}  tag={RouterLink}>
                                    Le confessional
                                    </DropdownItem>
                                    </Link>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <Link
                                activeClass="active"
                                to="equipe"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}>
                                <NavLink tag={RouterLink} to="/" style={{fontWeight: "bold"}}>
                                    Notre Équipe
                                </NavLink>
                            </Link>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                                <NavLink to="/nous-joindre" onClick={this.scrollToTop} tag={RouterLink} style={{fontWeight: "bold"}}>
                                    Nous Joindre
                                </NavLink> 
                        </NavItem>
                    </Nav>
                </Navbar>
            <Route
              path="/"
              exact={true}
              component={Home}
            />
            <Route
                path="/nos-projets"
                component={Projects}
                exact={true}
              />
              <Route
                path="/nous-joindre"
                component={Join}
              />
            </React.Fragment>
            </Router>
        )
    }
}