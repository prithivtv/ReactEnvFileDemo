import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <div className="container m4-4">
            <h1> Environment Name</h1>
            <p> running on {process.env.REACT_APP_ENV} </p>
            <p> api url : {process.env.REACT_APP_URL}</p>
        </div> 
    );
  }
}
