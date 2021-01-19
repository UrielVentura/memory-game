import React, { Component } from 'react';
import './Card.css'
import Flipcard from '@kennethormandy/react-flipcard'

class Card extends Component {

    render() { 
        return (
            <div className='card'>
                <Flipcard>
                    <div className = 'cover'>

                    </div>
                    <div className =  'content'>
                        <i className={`fa ${this.props.icon} fa-5x`}></i>
                    </div>
                </Flipcard>
                
            </div>
        );
    }
}
 
export default Card;