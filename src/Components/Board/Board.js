import React, { Component } from 'react';
import './Board.css';
import Card from '../Card/Card';

class Board extends Component {
    render() { 
        return ( 
            <div className ='board'>
                {
                    this.props.deck.map((card) => <Card icon = {card.icon}/>)
                }
            </div>
         );
    }
}
 
export default Board;