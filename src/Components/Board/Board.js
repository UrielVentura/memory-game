import React, { Component } from 'react';
import './Board.css';
import Card from '../Card/Card';

class Board extends Component {
    render() { 
        const cards = [1,2,3,4,5];
        return ( 
            <div className ='board'>
                {
                    cards.map((card) => 
                    <Card>

                    </Card>)
                }
            </div>
         );
    }
}
 
export default Board;