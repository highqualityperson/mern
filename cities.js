const cityModel = require("./model/cityModel");
const express = require("express");
const router = express.Router();
const auth = require("./middleware/auth");

/*get all cities*/
router.get("/", (req, res) => {
  cityModel
    .find({})
    .then((files) => {
      res.send(files);
    })
    .catch((err) => console.log(err));
});

// post cities (private)

router.post("/", auth, (req, res) => {
  const newCity = new cityModel({
    name: req.body.name,
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
