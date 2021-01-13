import React, { Component } from 'react';
import './Board.css';

class Board extends Component {
    render() { 
        const cards = [1,2,3,4,5];
        return ( 
            <div className ='board'>
                {
                    cards.map((card) => <span>{card}</span>)
                }
            </div>
         );
    }
}
 
export default Board;