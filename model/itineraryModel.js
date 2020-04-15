const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  city_name: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  city_id: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  user_pic: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  hashtags: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("itinerary", itinerarySchema);
