const itineraryModel = require("./model/itineraryModel");
const express = require("express");
const router = express.Router();

/*get all itineraries*/
router.get("/", (req, res) => {
  itineraryModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

// get by city_id

router.get("/:city_id", (req, res) => {
  let cityRequested = req.params.city_id;
  itineraryModel
    .find({ city_id: cityRequested })
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

module.exports = router;
