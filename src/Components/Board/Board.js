import React, { Component } from 'react';
import './Board.css';
import Card from '../Card/Card';

class Board extends Component {
    render() { 
        return ( 
            <div className ='board'>
                {
                    this.props.deck
                        .map((card,index) => {
                        const isComparing = this.props.selectedCouple.indexOf(card) > -1;

                        return <Card 
                            key={index}
                            icon = {card.icon}
                            isComparing = {isComparing}
                            selectedCouple = {() => this.props.selectCard(card)}
                            wasGuessed = {card.wasGuessed}
                        />;
                    })
                }
            </div>
         );
    }
}
 
export default Board;