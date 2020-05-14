import React, { Component } from 'react';
import foods from './../foods.json';
import FoodBox from './FoodBox';
import AddFoods from './AddFoods';
import SearchBar from './SearchBar';

export default class FoodList extends Component {
  state = {
    food: foods,
    showForm: false,
    inputValue: '',
    filterFoods: foods,
    quantity: 0,
    totalCalories: 0,
    listOfFoods: [],
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  addOneFoodBox = (newFoodObj) => {
    const foodsCopy = [...this.state.food];
    // moviesCopy.push(newFoodObj)
    foodsCopy.unshift(newFoodObj);

    this.setState({ food: foodsCopy });
  };

  filterOnChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
    let searchValue = e.target.value.toLowerCase();
    let filterFoods = [...this.state.food];

    let filteredFoods = filterFoods.filter((food) =>
      food.name.toLowerCase().includes(searchValue)
    );

    this.setState({ filterFoods: filteredFoods });
  };

  sumTheTotal = (totalCalories, name) => {
    let row = `${name} ${totalCalories}`;
    let listOfFoodsCopy = [...this.state.listOfFoods];
    listOfFoodsCopy.push(row);
    this.setState({
      listOfFoods: listOfFoodsCopy,
    });
  };

  render() {
    return (
      <div>
        <h1>Food List</h1>
        <button onClick={this.toggleForm}>Add new food</button>
        {this.state.showForm ? (
          <AddFoods createFood={this.addOneFoodBox} done={this.toggleForm} />
        ) : null}
        <SearchBar
          filterOnChange={this.filterOnChange}
          inputValue={this.state.inputValue}
        />
        <div className="list-add">
          <ul>
            {this.state.filterFoods.map((foodObj, ind) => {
              return (
                <FoodBox
                  key={ind}
                  {...foodObj}
                  quantityChange={this.quantityChange}
                  quantity={this.state.quantity}
                  sumTheTotal={this.sumTheTotal}
                />
              );
            })}
          </ul>
          <div>
            <h1>Today's Food</h1>
            <h3>{this.state.listOfFoods}</h3>
            <h3>Total: {this.state.totalCalories} cal.</h3>
          </div>
        </div>
      </div>
    );
  }
}
