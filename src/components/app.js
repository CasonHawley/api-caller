import React, { Component } from 'react';
import ApiCaller from './apicaller';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <p>These are the emails</p>
        <ApiCaller />
      </div>
    );
  }
}
