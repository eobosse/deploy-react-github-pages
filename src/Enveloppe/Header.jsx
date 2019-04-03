import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import LogoSvg from '../images/logo.svg';
import { Link, animateScroll as scroll } from 'react-scroll';
import { NavLink as RouterLink, Route } from "react-router-dom";
import  { Home, Projects, Join } from '../pages'

export default class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            projectName: ""
        };
      }

    selectProject(name) {
        this.setState({projectName: name});
        this.scrollToTop();
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <React.Fragment>
                <Navbar color="faded" fixed="top" light expand="md">
                    <NavbarBrand tag={RouterLink} to="/"  onClick={this.scrollToTop}>
                        <img src={LogoSvg} height="50px" alt={""}/>
                    </NavbarBrand>
                    <Nav navbar >
                    <Link
                                activeClass="active"
                                to="mission"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                                >
                        <NavItem>
                            
                                <NavLink tag={RouterLink} to="/" style={{fontWeight: "bold"}}>
                                    Notre Mission
                                </NavLink>
                        </NavItem>
                        </Link>
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
                        <UncontrolledDropdown nav inNavbar >
                            <DropdownToggle nav caret style={{fontWeight: "bold"}}>
                                Nos Projets
                            </DropdownToggle>
                            <DropdownMenu right>
                                    <DropdownItem to="/nos-projets" onClick={() => this.selectProject("confessional")}  tag={RouterLink}>
                                    Le confessional
                                    </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                                <NavLink to="/nous-joindre" tag={RouterLink} onClick={this.scrollToTop} style={{fontWeight: "bold"}}>
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
                render={() => <Projects projectName={this.state.projectName}/>}
                exact={true}
              />
              <Route
                path="/nous-joindre"
                component={Join}
              />
            </React.Fragment>
        );
    }
}

