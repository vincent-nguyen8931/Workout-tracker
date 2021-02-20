var router = require("express").Router();
var Workout = require("../models/workout")

router.get("/api/workouts", (req, res) => {
  Workout.find({}).then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});



module.exports = function (app) {

}

// query database