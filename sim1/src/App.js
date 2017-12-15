import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Head from './components/Head'
import Body from './components/Body'


class App extends Component {
  render() {
    return (
      <div>
        <Head/>
        <Body/>
      </div>
    );
  }
}

export default App;
