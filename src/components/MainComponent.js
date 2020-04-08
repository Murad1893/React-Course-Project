import React, { Component } from 'react';
import Menu from './MenuComponent' //importing my menu component
import '../App.css';
import Dishdetail from './DishdetailComponent'
import { DISHES } from '../shared/dishes'
import Header from './HeaderComponent'
import Footer from './FooterComponent'

//This is a container component handling all the state and passing it onto presentational components in order for them to display
class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {//over here we can define variables related to this component
      //defining as a javascript object containing a list of dishes
      dishes: DISHES, //now we have lifted all the information into the parent component
      selectedDish: null
    }
  }

  onDishSelect(dishId) {
    //you cannot change the state directly hence we need to use this.setState
    this.setState({
      selectedDish: dishId //this will ensure that the selectedDish will be equal to dish on selection
    })
  }

  render() {
    return (
      <div>
        <Header></Header>
        {/**passing the dishes and onClick method as props to the Menu component */}
        <Menu dishes={this.state.dishes} onClick={(dishId) => { this.onDishSelect(dishId) }} /> {/**now we can pass the state as props to child component of App */}
        {/**this helps to filter out all the dishes for which the dishId matches the selectedDish */}
        <Dishdetail dish={this.state.dishes.filter((dish) =>
          dish.id === this.state.selectedDish
        )[0]}></Dishdetail>
        <Footer></Footer>
      </div>
    )
  }
}

export default Main

