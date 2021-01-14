import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() { 
        return ( 
            <header>
                <div className='title'>Juego de Memoria</div>
                <div>
                    <button className='resetbtn'> Reiniciar</button>
                </div>
                <div className='title'> Intentos: </div>
            </header>
         );
    }
}
 
export default Header;