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
    const textoSegunBool = this.props.isActivated ? 'on' : 'off'
    const mappedNumbers = this.props.arrayOfNumbers.map(n => n *2)
    return (
      <div>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{this.props.objectWithInfo.key}</p>
        {/* <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{textoSegunBool}</p> */}
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
        <Text 
        arrayOfNumbers={[2,3,10]}
        objectWithInfo={{key : 'First value', key2 : 'otherValue'}}
        isActivated
        number={2} 
        text='Texto en string'  />
      </div>
   );
  }
}

 export default App;
