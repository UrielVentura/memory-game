import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Board from './Components/Board/Board';
import './App.css';
import boardCOnstructor from './Utils/boardConstructor';

const getInitialState = () => {
  const deck = boardCOnstructor();
  
    return {
      deck
    }
}
class App extends Component {
  constructor(props){

    super(props);
    this.state = getInitialState();
  }
  render() { 
    return ( 
      <div className="App">
      <Header/>
      <Board
        deck = {this.state.deck}
      />
    </div>
     );
  }
}
 
export default App;
