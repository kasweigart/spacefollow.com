import React, { useEffect, useState } from "react";
import { Alert, Nav, NavItem, NavLink, Jumbotron } from "reactstrap";
import axios from "axios";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

const issIcon = new L.Icon({
  iconUrl: "/iss.png",
  iconSize: [64, 64],
});

function Technology() {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  useEffect(() => {
    axios
      .get("http://api.open-notify.org/iss-now.json")
      .then((res) => {
        console.log(res);
        setLat(res.data.iss_position.latitude);
        setLong(res.data.iss_position.longitude);
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
          <NavLink href="#">ISS Current Location</NavLink>
        </NavItem>
      </Nav>
      <Jumbotron
        style={{ backgroundColor: "rgb(248,249,250,0.85)" }}
        className="container mt-5"
      >
        <h1 className="d-flex justify-content-center mb-5">
          <b>International Space Station Current Location</b>
        </h1>
        <Map center={[lat, long]} zoom={2}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[lat, long]} icon={issIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </Jumbotron>
    </div>
  );
}

export default Technology;
