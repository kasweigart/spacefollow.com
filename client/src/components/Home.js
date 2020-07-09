import React from "react";
import { Jumbotron, Button } from "reactstrap";

const Home = (props) => {
  return (
    <div className="container mt-5">
      <Jumbotron style={{ backgroundColor: "rgb(248,249,250,0.85)" }}>
        <h1 className="display-3">Welcome to SpaceFollow</h1>
        <p className="lead">
          This is a simple hero unit, a simple Jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Home;
