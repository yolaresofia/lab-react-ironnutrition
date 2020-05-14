import React, { Component } from 'react';

class AddFoods extends Component {
  state = {
    name: '',
    calories: '',
    image: '',
  };

  handleInput = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newFood = this.state;
    this.props.createFood(newFood);

    // Reset the form by resetting the values in the state
    this.setState({
      name: '',
      calories: '',
      image: '',
    });
    this.props.done();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
          />
          <br />

          <label>Calories: </label>
          <input
            type="text"
            name="calories"
            value={this.state.calories}
            onChange={this.handleInput}
          />
          <br />

          <label>Picture: </label>
          <input
            type="file"
            name="image"
            value={this.state.image}
            onChange={this.handleInput}
          />

          <br />
          <button type="submit">Add Food</button>
        </form>
      </div>
    );
  }
}

export default AddFoods;
