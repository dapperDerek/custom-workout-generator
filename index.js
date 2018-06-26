const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const buildCustomWorkout = require('./services/build-custom-workout');
const stretches = require('./data/stretches');
const workoutSplits = require('./data/workout-splits');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Configure body-parser for Express
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Put all API endpoints under '/api'
app.post('/api/build-custom-workout', (req, res) => {
  console.log(req, req.body.user);
  let customWorkout = buildCustomWorkout(req.body.user);
  res.json(customWorkout);
});


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Custom workout generator listening on ${port}`);