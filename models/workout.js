const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date
  },
  exercises: [{
  type: {
    type: String
  },
  name: {
    type: String
  },
  duration: {
    type: Number,
    // value: 20
  },
  weight: {
    type: Number,
    // value: 100
  },
  reps: {
    type: Number,
    // value: 10
  },
  sets: {
    type: Number,
    // value: 4
  }
}]
  
});

// remove commas if this works

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;


// required: "Enter a name for transaction"