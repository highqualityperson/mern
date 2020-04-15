const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cors = require("cors");

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
const db = require("./keys").mongoURI;

/* connect using mongoose */
mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("Connection to Mongo DB established"))
  .catch((err) => console.log(err));

/*  Routes 
    Contains all links to the content 
    of the website
    */
app.use("/cities", require("./routes/cities"));

/*  initialise the server 
    and assign it to a port */
app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});
