const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("config");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

/* MongoDB Key
    Key to access database 
    hosted on https://cloud.mongodb.com/
 */
const db = config.get("mongoDBconString");

/* connect using mongoose */
mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("Connection to Mongo DB established"))
  .catch((err) => console.log(err));

/*  Routes 
    Contains all links to the content 
    of the website
    */
app.use("/activities", require("./routes/activities"));
app.use("/auth", require("./routes/auth"));
app.use("/cities", require("./routes/cities"));
app.use("/itineraries", require("./routes/itineraries"));
app.use("/users", require("./routes/users"));

/*  initialise the server 
    and assign it to a port */
app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});
