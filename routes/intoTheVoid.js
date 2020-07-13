const express = require("express");
const intoTheVoidRouter = express.Router();
const axios = require("axios");
const apiKey = process.env.NASA_KEY;


intoTheVoidRouter.post("/api/neows", (req, res) => {
  axios
    .get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${req.body.startDate}&end_date=${req.body.endDate}&api_key=${apiKey}`)
    .then(function (response) {
        res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
});

module.exports = intoTheVoidRouter;
