const express = require("express");
const marsRouter = express.Router();
const axios = require("axios");
const apiKey = process.env.NASA_KEY;


marsRouter.post("/api", (req, res) => {
  axios
    .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${req.body.date}&api_key=${apiKey}`)
    .then(function (response) {
        res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
});

module.exports = marsRouter;
