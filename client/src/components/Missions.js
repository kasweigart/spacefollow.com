import React, { useEffect, useState } from "react";
import { Nav, NavItem, NavLink, Jumbotron } from "reactstrap";
import axios from "axios";

function Missions() {
  const [launchData, setLaunchData] = useState([]);

  useEffect(() => {
    axios
      .get("https://launchlibrary.net/1.3/launch/next/3")
      .then((res) => {
        console.log(res);
        setLaunchData(res.data.launches);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Nav
        style={{ backgroundColor: "rgba(52,58,64,.5)" }}
        className="d-flex justify-content-center"
      >
        <NavItem>
          <NavLink href="#">Upcoming Launches</NavLink>
        </NavItem>
      </Nav>
      <Jumbotron
        style={{ backgroundColor: "rgb(248,249,250,0.85)" }}
        className="container mt-5"
      >
        <h1 className="d-flex justify-content-center mb-5">
          <b>Upcoming Launches</b>
        </h1>
        {launchData.map((obj) => {
          return (
            <div className='mb-5'>
              <h2>{obj.name}</h2>
              <a href={obj.location.pads[0].mapURL}>{obj.location.pads[0].name}</a>
              <p>{obj.net}</p>
              <img src={obj.rocket.imageURL} alt="" className='img-fluid mb-2'/>
              <a href={obj.vidURLs[0]}>YouTube Mission Link</a>
            </div>
          );
        })}
      </Jumbotron>
    </div>
  );
}

export default Missions;
