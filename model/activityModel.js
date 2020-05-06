const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  itinerary_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  adress: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  }
});

//name if module is the singular of how the database is called
module.exports = mongoose.model("activity", activitySchema);
