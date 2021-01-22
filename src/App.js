import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Board from './Components/Board/Board';
import './App.css';
import boardCOnstructor from './Utils/boardConstructor';

const getInitialState = () => {
  const deck = boardCOnstructor();
  
    return {
      deck,
      selectedCouple: [],
      isComparing: false
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
        selectedCouple = {this.state.selectedCouple}
        selectCard = {(card) => this.selectCard(card)}
      />
    </div>
     );
  }

  selectCard = (card) => {
    if (
      this.state.isComparing || 
      this.state.selectedCouple.indexOf(card) > -1 ||
      card.wasGuessed
      ) {
      return;
    }

    const selectedCouple = [...this.state.selectedCouple,card];
    this.setState({
      selectedCouple
    })
  } 
  

}
 
export default App;
