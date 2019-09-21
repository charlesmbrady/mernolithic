const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const helloSchema = new Schema({
  greeting: { type: String }
  
});

const Hello = mongoose.model("Hello", helloSchema);

module.exports = Hello;
