let mongoose = require("mongoose");

//Create a person having this prototype:
let peapleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFoods: [String],
});

module.exports = Person = mongoose.model("Person", peapleSchema);