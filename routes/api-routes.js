var Workout = require("../models/Workout.js")

module.exports = function (app) {

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

app.post("/api/workouts",({body}, res) => {
  Workout.create(body)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

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