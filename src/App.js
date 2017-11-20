import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TabsCom from './Tabs'

class App extends Component {
  tabs = [
    {
      title:'Ttitle#1',
      content:'Content#1'
    },
    {
      title:'Ttitle#2',
      content:'Content#2'
    },
    {
      title:'Ttitle#3',
      content:'Content#3'
    },
  ]
  state = {
    activeTab:0
  }
  setActiveTab = (index) => {
    this.setState({activeTab: index})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TabsCom 
        tabs={this.tabs} 
        activeTab={this.state.activeTab}
        onTabChange = {this.setActiveTab}/>
      </div>
    );
  }
}

export default App;
