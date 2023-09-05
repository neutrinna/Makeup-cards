import React from 'react';

import './Card.scss';

export default function Card( props ){
    return(
        <section className = "Card">
            <img className = "Card__img" src = { props.image_link } alt = "фото продукта" />
            <h2 className = "Card__name">{ props.name }</h2>
            <p className = "Card__rating">Рейтинг: { props.rating? props.rating: '-'}</p>
        </section>
    );
}