import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  NavbarText
} from "reactstrap";
import { Link } from "react-router-dom";
import logoWhite from "../images/logoWhiteCropped.png";

const RSNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" className='text-white' style={{backgroundColor: 'black'}}>
        <Link to="/">
          <img src={logoWhite} width="32px" className="mr-2" alt="logo"></img>
        </Link>
        <Link to="/">
          <NavbarBrand href="https://www.spacefollow.com/">
            SPACEFOLLOW
          </NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto bg-transparent" navbar>
            <NavItem>
              <Link to="/missions" style={{ textDecoration: "none" }}>
                <NavLink>MISSIONS</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/mars" style={{ textDecoration: "none" }}>
                <NavLink>OUR JOURNEY TO MARS</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/images" style={{ textDecoration: "none" }}>
                <NavLink>IMAGES</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/technology" style={{ textDecoration: "none" }}>
                <NavLink>TECHNOLOGY</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/into-the-void" style={{ textDecoration: "none" }}>
                <NavLink>INTO THE VOID</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <NavLink>CONTACT</NavLink>
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar></UncontrolledDropdown>
          </Nav>
          <NavbarText>
            Welcome, Explorer
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default RSNav;
