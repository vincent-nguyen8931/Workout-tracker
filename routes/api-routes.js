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

router.put("/api/workouts",({body}, res) => {
  Workout.create(body)
  .then(({_id}) => Workout.findOneAndUpdate({}, { $push: { exercise: _id}}, { new: true}))
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.post("/api/workouts/range",(req, res) => {
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