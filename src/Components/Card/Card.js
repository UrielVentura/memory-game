import React, { Component } from 'react';
import './Card.css'
import { FlexyFlipCard } from 'flexy-flipcards'

class Card extends Component {

    render() { 
        return (
            <div className='card'>
                <FlexyFlipCard>
                     <div className = 'cover' ref='flipper'>
                    </div>
                    <div className =  'content'>
                        <i className={`fa ${this.props.icon} fa-5x`}></i>
                    </div>
                </FlexyFlipCard>                
            </div>
        );
    }
}
 
export default Card;