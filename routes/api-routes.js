var Workout = require("../models/Workout.js")

module.exports = function (app) {

  // gets every workout and apply to last workout
  app.get("/api/workouts", (req, res) => {
  Workout.find({})
  .then(dbWorkout => {
    dbWorkout.$addFields({length: {$sum: exercises.length}})
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

// creates a new workout
app.post("/api/workouts",({body}, res) => {
  Workout.create(body)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

// adds new exercise to last workout
app.put("/api/workouts/:id",(req, res) => {
   Workout.findOneAndUpdate({_id: req.params.id
  }, 
  { $push: { exercise: req.body}}, 
  {new: true})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

// sends last workout data to the chart in stats page
app.get("/api/workouts/range",(req, res) => {
  Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

}


// query database