const express = require('express');
const path = require('path');
const buildCustomWorkout = require('./services/build-custom-workout');
const stretches = require('./data/stretches');
const workoutSplits = require('./data/workout-splits');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/build-custom-workout', (req, res) => {
  buildCustomWorkout(req);
  res.json(exercises);
});

app.get('/api/stretches', (req, res) => {
  res.json(stretches);
});


app.get('/api/workout-splits', (req, res) => {
  res.json(workoutSplits);
});


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Custom workout generator listening on ${port}`);