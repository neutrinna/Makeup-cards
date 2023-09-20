import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setLikeProp, deleteProductCard } from '../store/productsSlice';

import likeBtn from '../icons/heart_filled.svg';
import unlikeBtn from '../icons/heart.svg';
import deleteBtn from '../icons/delete.svg';
import './Card.scss';

export default function Card( props ){
    const [ isLiked, setIsLiked ] = useState( unlikeBtn );
    const dispatch = useDispatch();

    const toggleLike  = () => {
        isLiked === unlikeBtn?
            setIsLiked( likeBtn ):
            setIsLiked( unlikeBtn );
    };

    const handleClickLike = () => {
        dispatch( setLikeProp( props.id ));
        toggleLike();
    };

    const handleClickDelete = () => {
        dispatch( deleteProductCard( props.id ));
    };

    return(
        <section className = "Card">
            <img src = { isLiked } alt = "Кнопка лайк" className = "Card__like" onClick = { handleClickLike }/>
            <img src = { deleteBtn } alt = "Кнопка лайк" className = "Card__delete" onClick = { handleClickDelete }/>
            <img className = "Card__img" src = { props.image_link } alt = "фото продукта" />
            <h2 className = "Card__name">{ props.name }</h2>
            <p className = "Card__rating">Рейтинг: { props.rating? props.rating: '-'}</p>
        </section>
    );
}