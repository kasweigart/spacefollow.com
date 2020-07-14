import React, { useState, useEffect } from "react";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Nav,
  NavItem,
  NavLink,
  Jumbotron,
} from "reactstrap";
import axios from "axios";

const Images = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [apodHdUrl, setApodHdUrl] = useState("");
  const [apodTitle, setApodTitle] = useState("");
  const [apodExplanation, setApodExplanation] = useState("");
  const [apodDate, setApodDate] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios("/images/api")
      .then((res) => {
        console.log(res);
        setApodHdUrl(res.data.hdurl);
        setApodTitle(res.data.title);
        setApodExplanation(res.data.explanation);
        setApodDate(res.data.date);
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
          <NavLink href="#">APOD</NavLink>
        </NavItem>
      </Nav>
      <Jumbotron
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
      </Jumbotron>
    </div>
  );
};

export default Images;
