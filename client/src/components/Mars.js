import React, { useEffect, useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Jumbotron,
  Button,
  Alert,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

function Mars() {
  const [date, setDate] = useState(new Date());
  const [marsRovPhoData, setMarsRovPhoData] = useState([]);
  const [photosFound, setPhotosFound] = useState('')
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      date: moment(date).format("YYYY-MM-DD"),
    };

    axios
      .post("/mars/api", data)
      .then((res) => {
        console.log(res);
        setPhotosFound(res.data.photos.length + ' Mars Rover Photos Found...')
        setMarsRovPhoData(res.data.photos);
        setMessage("");
      })
      .catch((err) => {
        setMessage(
          <Alert color="danger">No data was found. Please try again.</Alert>
        );
      });
  };

  return (
    <div>
      <Nav
        style={{ backgroundColor: "rgba(52,58,64,.5)" }}
        className="d-flex justify-content-center"
      >
        <NavItem>
          <NavLink href="#">Mars Rover Photos</NavLink>
        </NavItem>
      </Nav>
      <Jumbotron
        style={{ backgroundColor: "rgb(248,249,250,0.85)" }}
        className="container mt-5"
      >
        <h1 className="d-flex justify-content-center mb-5">
          <b>Mars Rover Photos</b>
        </h1>
        <h4>
          Enter an earth date and retrieve photos taken on Mars for the
          corresponding sol <i>(day on Mars).</i>
        </h4>
        {message}
        <div>
          <p>Earth Date:</p>
          <DatePicker
            selected={date}
            onChange={(dt) => setDate(dt)}
            className="mb-3"
          />
        </div>
        <Button className="mt-4 mb-4" color="dark" onClick={handleSubmit}>
          Search
        </Button>
        <h5>
          <i>{photosFound}</i>
        </h5>
        {marsRovPhoData.map((obj) => {
          return (
            <Card className="mb-5">
              <CardImg top width="100%" src={obj.img_src} alt={obj.id} />
              <CardBody>
                <CardTitle>
                  <b>Image ID:</b> {obj.id}
                </CardTitle>
                <CardSubtitle>
                  <b>Earth Date:</b> {obj.earth_date}
                </CardSubtitle>
                <CardText>
                  <b>Rover Name:</b> {obj.rover.name}
                  <br></br>
                  <b>Status:</b> {obj.rover.status.toUpperCase()}
                  <br></br>
                  <b>Camera:</b> {obj.camera.full_name}
                  <br></br>
                  <b>Launch Date:</b> {obj.rover.launch_date}
                  <br></br>
                  <b>Landing Date:</b> {obj.rover.landing_date}
                </CardText>
              </CardBody>
            </Card>
          );
        })}
      </Jumbotron>
    </div>
  );
}

export default Mars;
