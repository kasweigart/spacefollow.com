import React from "react";
import { Jumbotron, Button } from "reactstrap";
import space from "../images/space.jpg";

const Home = () => {
  return (
    <div className="container mt-5">
      <Jumbotron style={{ backgroundColor: "rgb(248,249,250,0.75)" }}>
        <h1 className="text-center">
          Welcome to SpaceFollow
        </h1>
        <h2 className="text-center">
          An organized platform for space exploration topics and data.
        </h2>
        <hr className="text-center" />
        <h3 className="text-center">Explore the tabs above to learn more!</h3>
        <img src={space} alt="" className='img-fluid mt-2'/>
      </Jumbotron>
    </div>
  );
};

export default Home;
