const config = require("../config/config.json");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-auth-token");

  /* Check for token */
  if (!token)
    return res
      .status(401)
      .json({ msg: "Authorization denied. Please provide valid token." });

  try {
    // Verify token
    const decoded = jwt.verify(token, config.jwtSecret);
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res
      .status(400)
      .json({ msg: "Authorization denied. Please provide valid token." });
  }
}

module.exports = auth;
