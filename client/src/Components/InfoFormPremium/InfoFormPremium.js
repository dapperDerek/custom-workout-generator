import React, { Component } from 'react';
import './InfoFormPremium.css'

export default class InfoFormPremium extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fitnessLevel: "beginner",
      fitnessGoal: "muscle",
      splitFrequency: "one day"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    this.getCustomWorkout(this.state);
    event.preventDefault();
  }

  getCustomWorkout(userInfo) {
    // Get the exercises and store them in state
    fetch('/api/build-custom-workout', userInfo)
      .then(res => res.json())
      .then(exercises => this.setState({ exercises }));
  };



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          What's your current fitness level?
          <select name="fitnessLevel" value={this.state.value} onChange={this.handleInputChange}>
            <option value="beginner">beginner</option>
            <option value="intermediate">intermediate</option>
            <option value="advanced">advanced</option>
          </select>
        </label>

        <label>
        Pick your fitness goal.
        <select name="fitnessGoal" value={this.state.value} onChange={this.handleInputChange}>
          <option value="muscle">Build Muscle</option>
          <option value="fatloss">Lose Fat</option>
          <option value="strength">Increase Strength</option>
          <option value="endurance">Increase Endurance</option>
        </select>
      </label>

        <label>
          How often can you workout?
          <select name="splitFrequency" value={this.state.value} onChange={this.handleInputChange}>
            <option value="one day">1 day</option>
            <option value="two day">2 days</option>
            <option value="three day">3 days</option>
            <option value="four day">4 days</option>
            <option value="five day">5 days</option>
          </select>
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}