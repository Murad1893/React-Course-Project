import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import Main from './components/MainComponent' //importing my menu component
import './App.css';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      //Enclosing in this tag to allow using react-router-dom
      <BrowserRouter>
        <div>
          <Main /> {/**now we can pass the state as props to child component of App */}
        </div>
      </BrowserRouter>
    )
  }
}

export default App

