import React from "react";
import {
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

function Mars() {

  return (
    <div>
      <Nav style={{backgroundColor: 'rgba(52,58,64,.5)'}} className='d-flex justify-content-center'>
        <NavItem>
          <NavLink href="#">Mars Rover Photos</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
      </Nav>
      {/* <Jumbotron
        style={{ backgroundColor: "rgb(248,249,250,0.85)" }}
        className="container mt-5"
      >
        <h1 className="d-flex justify-content-center mb-5">
          <b>Astronomy Picture of the Day</b>
        </h1>
        <h2>{apodTitle}</h2>
        <p>{apodDate}</p>
        <img src={apodHdUrl} alt="" className="img-fluid mb-3" />
        <p>{apodExplanation}</p>
      </Jumbotron> */}
    </div>
  );
}

export default Mars;
