import React, { Component } from 'react';
import logo from './logo.svg';
import factory from './ethereum/factory'
import web3 from './ethereum/web3'

import './App.css';

class App extends Component {
  state = {
    events: []
  }
  componentDidMount(){
    web3.eth.getAccounts().then(res => {
      console.log(res)
    })
    factory.methods.getDeployedEvents().call().then(res => {
      console.log(res)
    })
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
