const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  city_name: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
    unique: true,
  },
  color: {
    type: String,
    required: true,
  },
  hobby: {
    type: String,
    required: true,
  },
});

//name if module is the singular of how the database is called
module.exports = mongoose.model("itinerary", itinerarySchema);
