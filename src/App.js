import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './components/MenuComponent' //importing my menu component
import './App.css';
import { DISHES } from './shared/dishes'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES //now we have lifted all the information into the parent component
    }
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} /> {/**now we can pass the state as props to child component of App */}
      </div>
    )
  }
}

export default App

