var Workout = require("../models/Workout.js")

module.exports = function (app) {

  // gets every workout and apply to last workout
  app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
         // 
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    Workout.findOneAndUpdate({
      _id: req.params.id
    },
      { $push: { exercises: req.body } },
      { new: true })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
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