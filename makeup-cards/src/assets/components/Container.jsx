import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from '../store/productsSlice';

import Card from './Card';
import './Container.scss';

export default function Container(){
    const products = useSelector( state => state.products.products);
    const dispatch = useDispatch();

    useEffect( () => {
        const asyncFn = async () => dispatch( fetchProducts() );
        asyncFn();
    }, [ dispatch ] );

    return(
        <main className = "Container">
            { products.map( product => <Card key = { product.id } { ...product }/> )}
        </main>
    );
}
