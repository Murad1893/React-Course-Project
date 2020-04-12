import React, { Component } from 'react';
import Main from './components/MainComponent' //importing my menu component
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux' //this enables store to be available to all comoponents
import { ConfigureStore } from './redux/configureStore'

//using our store
const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* //Enclosing in this tag to allow using react-router-dom */}
        <BrowserRouter>
          <div>
            <Main /> {/**now we can pass the state as props to child component of App */}
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App

