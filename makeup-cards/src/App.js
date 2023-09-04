import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { refreshProducts } from './assets/store/productsSlice';

import './App.css';

function App() {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();

    // const refresh = dispatch( refreshProducts( products ));

    useEffect( () => dispatch( refreshProducts( products )), [] );

    return (
        <div className="App"> 
            {products}
        </div>
    );
}

export default App;
