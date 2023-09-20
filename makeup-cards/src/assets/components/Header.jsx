import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { filterProducts } from '../store/productsSlice';

import './Header.scss';

export default function Header(){
    const [ filterBtnState, setFilterBtnState ] = useState( false );
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch( filterProducts());
        setFilterBtnState( !filterBtnState );
    };

    return(
        <header className = "Header"> 
            <div className = "Header__wrapper">
                <button className = "Header__button" onClick = { handleClick }>
                    { filterBtnState ? 'Показать все' : 'Показать понравившиеся'}
                </button>
            </div>
        </header>
    );
}