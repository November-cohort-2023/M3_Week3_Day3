const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const projectSchema = new Schema({
  title: {
    type:String,
    minlength: [2,"All Projects need to have minimum 2 characters for title"],
    unique:true
  },
  description: String,
  rating:{
    type:Number,
    min:[1,"RATING NEEDS TO BE ABOVE 1"],
    max:[5,"MAX RATING IS 5"]
  },
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
  // owner will be added later on
});

module.exports = model("Project", projectSchema);