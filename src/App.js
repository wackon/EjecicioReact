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
class Text extends Component{
  render(){
    return (
      <div>
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{this.props.boolean}</p>
      </div>
    )
  }
}

class App extends Component{
  render () {
    return(
  
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <Hello title='Hello from props'/>
      </div>
        <Text number={2} text='Texto en string' boolean={true}/>
      </div>
   );
  }
}

 export default App;
