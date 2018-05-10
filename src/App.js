import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
functional component. For more information check 
https://codepen.io/nedimb/pen/GdxKwp?editors=0010
*/
const Header = ({logo, message}) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">{message}</h1>
  </header>
)

//class component
class App extends Component {
  /*
  constructor is the place where we initialize our state
  it is one of the lifecycle methods, for more infomrations check
  https://codepen.io/eduardoboucas/details/jqWbdb
  */
  constructor(props) {
    console.log('constructor')
    super(props)
    //initializing state
    this.state = {
      paragraphMessage: 'To get started, edit'
    }
  }
  componentDidMount(){
    console.log('componentDidMount');
    setTimeout(()=> {
      //setting state
      this.setState({paragraphMessage:'Hey! I said edit'})
    }, 5000)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  render() {
    console.log('render')
    return (
      <div className="App">
        <Header logo={logo} message='Welcome to React!' />
        <p className="App-intro">
        {/* Whan accessing state or props in class component we have to use this keyword*/}
          {this.state.paragraphMessage} <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
