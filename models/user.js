const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true },
  age: { 
    type: Number, 
    required: true },
  email: String,
});

module.exports = user = mongoose.model("User", userSchema);