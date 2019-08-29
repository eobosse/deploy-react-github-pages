import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import LogoSvg from '../images/logo.svg';
import Logotpv from '../images/logotpv.jpg';
import LogoConfessionnal from '../images/summary.jpg';
import { Link, animateScroll as scroll } from 'react-scroll';
import { NavLink as RouterLink, Route } from "react-router-dom";
import  { Home, Projects, Join } from '../pages';
import { Parallax } from '../Components';

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

    selectImage = (name) => {
        if (name === "confessionnal") {
            return LogoConfessionnal;
        } else {
            return Logotpv;
        }
    }

    selectTab(name) {
        this.setState({tab: name});
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <React.Fragment>
                <Parallax image={this.selectImage(this.state.projectName)}/>
                <Navbar color="faded" fixed="top" light expand="md">
                    <NavbarBrand tag={RouterLink} to="/"  onClick={this.scrollToTop}>
                        <img src={LogoSvg} height="50px" alt={""}/>
                    </NavbarBrand>
                    <Nav navbar>
                    <Link
                                activeClass="active"
                                to="mission"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                                >
                        <NavItem >
                            
                                <NavLink tag={RouterLink} to="/" style={{fontWeight: "bold", color: "black"}} onClick={() => this.selectProject("home")}>
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
                                <NavLink tag={RouterLink} to="/" style={{fontWeight: "bold", color: "black"}} onClick={() => this.selectProject("home")}>
                                    Notre Équipe
                                </NavLink>
                            </Link>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar >
                            <DropdownToggle nav caret style={{fontWeight: "bold", color: "black"}}>
                                Nos Projets
                            </DropdownToggle>
                            <DropdownMenu right>
                                    <DropdownItem to="/nos-projets" onClick={() => this.selectProject("confessionnal")}  tag={RouterLink}>
                                    Le confessionnal
                                    </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                                <NavLink to="/nous-joindre" tag={RouterLink} onClick={() =>this.scrollToTop} style={{fontWeight: "bold", color: "black"}} onClick={() => this.selectProject("join")}>
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

