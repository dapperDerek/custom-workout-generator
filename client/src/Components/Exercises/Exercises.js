import React, { Component } from 'react';
import './Exercises.css'

export default class Exercises extends Component {
  // Initialize state
  state = { exercises: [] };

  // Fetch passwords after first mount
  componentDidMount() {
    this.getExercises();
  }

  getExercises = () => {
    // Get the exercises and store them in state
    fetch('/api/exercises')
      .then(res => res.json())
      .then(exercises => this.setState({ exercises }));
  };

  render() {
    const { exercises } = this.state;

    return (
      <div>
        {/* Render the exercises if we have them */}
        {exercises.length ? (
          <div>
            <h1>List of available exercises</h1>
            <ul className="exercises">
              {exercises.map((exercise) =>
                <li key={exercise.name}>
                  {exercise.name}
                </li>
              )}
            </ul>
            <button
              className="more"
              onClick={this.getExercises}>
              Get More
            </button>
          </div>
        ) : (
          // Render a helpful message otherwise
          <div>
            <h1>No exercises :(</h1>
            <button
              className="more"
              onClick={this.getExercises}>
              Try Again?
            </button>
          </div>
        )}
      </div>
    );
  }
}