let mongoose = require("mongoose");

//Create a person having this prototype:
let peapleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phonenumber:Number,
  age: Number
});

module.exports = Person = mongoose.model("Person", peapleSchema);