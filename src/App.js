import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// function Hello (props){
//   return <h2>{props.title}</h2>

//  const Hello = (props) => <h2>{props.title}</h2>

class Hello extends Component{
  render(){
    return <h2>{this.props.title}</h2>
  }
}

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <Hello title='Hello from props'/>
      </div>
    </div>
  );
}

export default App;
