import React from 'react';

import './Loader.scss';

export default function Loader(){
    return (
        <div className = "Loader">
            <div className = "lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>);
}