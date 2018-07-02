const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sample = require('lodash/sample');

const buildCustomWorkout = require('./services/build-custom-workout');
const getExercise = require('./services/get-exercise');
const getSetRepRange = require('./services/get-set-rep-range');


const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Configure body-parser for Express
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Put all API endpoints under '/api'
app.post('/api/build-custom-workout', (req, res) => {
  let customWorkout = buildCustomWorkout(req.body.user);
  res.json(customWorkout);
});

app.post('/api/get-exercise', (req, res) => {
  let exercise = getExercise(req.body.muscle, req.body.fitnessGoal);
  let setRepRange = getSetRepRange(req.body.fitnessGoal);
  let setReps = sample(setRepRange);

  exercise.sets = setReps.sets;
  exercise.reps = setReps.reps;
  res.json(exercise);
});


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Custom workout generator listening on ${port}`);