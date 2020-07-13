const express = require("express");
const imagesRouter = express.Router();
const axios = require("axios");
const apiKey = process.env.NASA_KEY;


imagesRouter.get("/api", (req, res) => {
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    .then(function (response) {
        res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
});

module.exports = imagesRouter;
