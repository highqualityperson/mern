const activityModel = require("./model/activityModel");
const express = require("express");
const router = express.Router();

/*get all itineraries*/
router.get("/", (req, res) => {
  activityModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

// get by city_id

router.get("/:itinerary_id", (req, res) => {
  let itineraryRequested = req.params.itinerary_id;
  activityModel
    .find({ itinerary_id: itineraryRequested })
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

module.exports = router;
