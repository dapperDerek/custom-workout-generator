const express = require('express');
const path = require('path');
const exercises = require('./data/exercises');
const stretches = require('./data/stretches');
const workoutSplits = require('./data/workout-splits');



const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const count = 5;

  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    Math.floor((Math.random() * 10000000) + 1)
  );

  // Return them as json
  console.log(passwords);
  res.json(passwords);

  console.log(`Sent ${count} passwords`);
});


app.get('/api/exercises', (req, res) => {
  console.log(exercises);
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