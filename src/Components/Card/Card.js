import React, { Component } from 'react';
import './Card.css'
import FlipCard from 'react-flipcard';

class Card extends Component {

    render() { 
        return (
            <div className='card' onClick={this.props.selectCard} >
                <FlipCard
                    /*flipped = {this.props.isComparing || this.wasGuessed}*/
                    /*disabled={true}*/
                >
                     <div className = 'cover' >
                    </div>
                    <div className =  'content'>
                        <i className={`fa ${this.props.icon} fa-5x`}></i>
                    </div>
                </FlipCard>                
            </div>
        );
    }
}
 
export default Card;