const cityModel = require("../../model/cityModel");
const auth = require("../../middleware/middleware");
const express = require("express");
const router = express.Router();

/* get all cities
 */
router.get("/all", (req, res) => {
  cityModel
    .find({})
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
});

res.send({ msg: "Cities test route." });

/* post cities (private)
 */
router.post("/", (req, res) => {
  const newCity = new cityModel({
    name: req.body.name,
    country: req.body.country,
  });

  newCity
    .save()
    .then((city) => {
      res.send(city);
    })
    .catch((err) => {
      res.status(500).send("Server error");
    });
});

module.exports = router;
