import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import Main from './components/MainComponent' //importing my menu component
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Main /> {/**now we can pass the state as props to child component of App */}
      </div>
    )
  }
}

export default App

