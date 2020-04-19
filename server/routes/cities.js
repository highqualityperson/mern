const cityModel = require("../../model/cityModel");
const auth = require("../../middleware/middleware");
const express = require("express");
const router = express.Router();

/* get all cities
 */
router.get("/", (req, res) => {
  cityModel
    .find({})
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
});

/*  post new city
 */

router.post("/", auth, (req, res) => {
  const newCity = new cityModel({
    city: req.body.name,
    country: req.body.country,
  });

  cityModel.find({}).then((files) => {
    for (i = 0; i < files.length; i++) {
      if (files[i].name == newCity.name) {
        console.log("this city already exists");
      } else {
        newCity
          .save()
          .then((name) => {
            res.send(name);
          })
          .catch((err) => {
            res.status(500).send("Server error");
          });
      }
    }
  });
});

module.exports = router;
