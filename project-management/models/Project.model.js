
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
 
const projectSchema = new Schema({
  title: { type: String },
  description: { type: String}
});
 
Project = model("Project", projectSchema);

module.exports = Project

