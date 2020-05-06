// Connection of express
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("config");

// Routes files import
const cityRouter = require("./cities");
const itineraryRouter = require("./itineraries");
const activityRouter = require("./activities");
const userRouter = require("./users");
const authRouter = require("./auth");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import the MongoDB Key
const db = config.get("mongoURI");

// Connection of MongoDB Database with Express, trhought Mongoose
mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connection to Mongo DB established"))
  .catch((err) => console.log(err));

// Routes
app.use("/cities", cityRouter);
app.use("/itineraries", itineraryRouter);
app.use("/activities", activityRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
