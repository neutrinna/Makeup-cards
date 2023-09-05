import React from 'react';

import './Header.scss';

export default function Header(){
    return(
        <header className = "Header"> 
            <div className = "Header__wrapper">
                <button className = "Header__button">Показать понравившиеся</button>
            </div>
        </header>
    );
}