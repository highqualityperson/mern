const userModel = require("./model/userModel");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

// post user

router.post(
  "/",
  [
    check("name").isLength({ min: 3 }),
    check("email").isEmail(),
    check("password").isLength({ min: 5 })
  ],
  (req, res) => {
    // Validation

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    // Check for existing user
    userModel.findOne({ email: req.body.email }).then(user => {
      if (user) return res.status(400).json({ msg: "User already exists" });

      const newUser = new userModel({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
      });

      //   Create salt & hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then(user => {
            jwt.sign(
              { _id: user._id },
              config.get("jwtSecret"),
              { expiresIn: 3600 },
              (err, token) => {
                if (err) throw err;
                res.json({
                  token,
                  user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                  }
                });
              }
            );
          });
        });
      });
    });
  }
);

module.exports = router;
