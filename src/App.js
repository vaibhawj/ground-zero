import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ResetPassword from './containers/ResetPasswordContainer';

class App extends Component {


  render() {
    return (
      <div className="App">
        <ResetPassword />
      </div>
    );
  }
}

export default App;
