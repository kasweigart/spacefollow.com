import React, { useState, useRef, useEffect } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Jumbotron,
  Button,
  Collapse,
  Card,
  CardBody,
  Alert
} from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import axios from "axios";

function IntoTheVoid() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [elementCount, setElementCount] = useState("");
  const [neowsData, setNeowsData] = useState([]);
  const [objects, setObjects] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      startDate: moment(startDate).format("YYYY-MM-DD"),
      endDate: moment(endDate).format("YYYY-MM-DD"),
    };

    axios
      .post("/into-the-void/api/neows", data)
      .then((res) => {
        console.log(res);
        setNeowsData(res.data.near_earth_objects);
        setElementCount(res.data.element_count + ' Near Earth Objects Found...');
        setDataLoaded(true);
        setMessage('')
      })
      .catch((err) => {
        setMessage(<Alert color='danger'>No data was found. Please try again.</Alert>)
      });
  };

  useEffect(() => {
    if (dataLoaded) {
      let dataArr = [];
      Object.values(neowsData).map((obj) => {
        obj.map((obj2) => {
          return dataArr.push({
            date: obj2.close_approach_data[0].close_approach_date_full,
            name: obj2.name,
            url: obj2.nasa_jpl_url,
            magnitude: obj2.absolute_magnitude_h,
            diameterFeetMin:
              obj2.estimated_diameter.feet.estimated_diameter_min,
            diameterFeetMax:
              obj2.estimated_diameter.feet.estimated_diameter_max,
            diameterMetersMin:
              obj2.estimated_diameter.meters.estimated_diameter_min,
            diameterMetersMax:
              obj2.estimated_diameter.meters.estimated_diameter_max,
            distanceMiles: obj2.close_approach_data[0].miss_distance.miles,
            distanceKm: obj2.close_approach_data[0].miss_distance.kilometers,
            velocityKmH:
              obj2.close_approach_data[0].relative_velocity.kilometers_per_hour,
            velocityKmS:
              obj2.close_approach_data[0].relative_velocity
                .kilometers_per_second,
            velocityMH:
              obj2.close_approach_data[0].relative_velocity.miles_per_hour,
          });
        });
      });

      console.log(dataArr);
      setObjects(dataArr);
    }
  }, [dataLoaded]);

  return (
    <div>
      <Nav
        style={{ backgroundColor: "rgba(52,58,64,.5)" }}
        className="d-flex justify-content-center"
      >
        <NavItem>
          <NavLink href="#">NeoWs</NavLink>
        </NavItem>
      </Nav>
      <Jumbotron
        style={{ backgroundColor: "rgb(248,249,250,0.85)" }}
        className="container mt-5"
      >
        <h1 className="d-flex justify-content-center mb-5">
          <b>Near Earth Object Web Service</b>
        </h1>

        <h2>NEO Feed Search</h2>
        <p>
          Enter a start date and an end date to get a list of historical data on
          Earth's nearby asteroids.
        </p>
        <p><b>Forewarning: Datasets are large. Please search up to a week's worth of data at a time to ensure a successful response.</b></p>
        {message}
        <div>
          <p>Start Date:</p>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="mb-3"
          />
        </div>
        <div>
          <p>End Date:</p>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
        <Button className="mt-4 mb-4" color="dark" onClick={handleSubmit}>
          Search
        </Button>
        <h5>
          <i>{elementCount}</i>
        </h5>
        {objects.map((obj) => {
          return (
            <Card className="mb-3">
              <CardBody>
                <p>
                  <b>Time of Closest Distance to Earth:</b> {obj.date}
                </p>
                <p>
                  <b>Closest Distance:</b> {obj.distanceMiles} miles or{" "}
                  {obj.distanceKm} kilometers
                </p>
                <p>
                  <b>Name:</b> {obj.name}
                </p>
                <p>
                  <b>NASA JPL URL:</b> <a href={obj.url}>{obj.url}</a>
                </p>
                <p>
                  <b>Absolute Magnitude H:</b> {obj.magnitude}
                </p>
                <p>
                  <b>Diameter:</b> {obj.diameterFeetMin} - {obj.diameterFeetMax}{" "}
                  feet or {obj.diameterMetersMin} - {obj.diameterMetersMax}{" "}
                  meters
                </p>
                <p>
                  <b>Relative Velocity:</b> {obj.velocityMH} miles/hr or{" "}
                  {obj.velocityKmH} km/hr or {obj.velocityKmS} or km/s
                </p>
              </CardBody>
            </Card>
          );
        })}
      </Jumbotron>
    </div>
  );
}

export default IntoTheVoid;
