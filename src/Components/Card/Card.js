import React, { Component } from 'react';
import './Card.css'
import FlipCard from 'react-flipcard';

class Card extends Component {

    render() { 
        return (
            <div className='card'>
                <FlipCard>
                    <div className = 'cover'>

                    </div>
                    <div className =  'content'>
                        <i className={`fa ${this.props.icon} fa-5s`}></i>
                    </div>
                </FlipCard>
                
            </div>
        );
    }
}
 
export default Card;