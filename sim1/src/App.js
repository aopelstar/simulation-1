import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Head from './components/Head'
import Body from './components/Body'


class App extends Component {
  render() {
    return (
      // Right here I am declaring JSX.  At least I'm pretty sure.  
      <div> 
        <Head/>
        <Body/>
      </div>
    );
  }
}

export default App;
