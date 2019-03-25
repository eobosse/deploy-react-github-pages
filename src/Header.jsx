import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import LogoSvg from './images/logo.svg';
import { Link, animateScroll as scroll } from 'react-scroll'


export default class Header extends React.Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <div>
                <Navbar color="faded" fixed="top" light expand="md">
                    <NavbarBrand href="#top"  onClick={this.scrollToTop}>
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
                                <NavLink style={{fontWeight: "bold"}}>
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
                                    duration= {500}>
                                    <DropdownItem>
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
                                <NavLink style={{fontWeight: "bold"}}>
                                    Notre Équipe
                                </NavLink>
                            </Link>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link
                                activeClass="active"
                                to="footer"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}>
                                <NavLink style={{fontWeight: "bold"}}>
                                    Nous Joindre
                                </NavLink> 
                            </Link>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}