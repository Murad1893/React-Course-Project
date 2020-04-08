import React, { Component } from 'react';
import Menu from './MenuComponent' //importing my menu component
import '../App.css';
import Dishdetail from './DishdetailComponent'
import { DISHES } from '../shared/dishes'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import { Switch, Route, Redirect } from 'react-router-dom'

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

    //making a functional component here
    const HomePage = () => {
      return (
        <Home></Home>
      )
    }

    return (
      <div>
        <Header></Header>
        <Switch> {/**using the switch to switch between routes*/}
          <Route path='/home' component={HomePage} />
          {/**if we want to pass some props a component we must send it using an arrow function */}
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}></Menu>} /> {/**here route should match the exact pathname */}
          {/**when the above routes are not matched the user is redirected to a default page */}
          <Redirect to='/home'></Redirect> {/**default redirection to home */}
        </Switch>
        <Footer></Footer>
      </div>
    )
  }
}

export default Main

