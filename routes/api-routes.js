var router = require("express").Router();
var Workout = require("../models/workout.js")

router.get("/api/workouts", (req, res) => {
  Workout.find({}).then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.post("/api/workouts",({body}, res) => {
  Workout.create(body)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.put("/api/workouts/:id",(req, res) => {
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

router.get("/api/workouts/range",(req, res) => {
  Workout.find({}).then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

module.exports = router;


// query database