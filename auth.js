const userModel = require("./model/userModel");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");

// post Auth user

router.post("/", (req, res) => {
  const { email, password } = req.body;

  //   simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // Check for existing user
  userModel.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ msg: "User does not exists" });

    // Validate password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

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

// get auth/user to get user data (private)
router.get("/user", auth, (req, res) => {
  userModel
    .findById(req.user._id)
    .select("-password")
    .then(user => res.json(user));
});

module.exports = router;
