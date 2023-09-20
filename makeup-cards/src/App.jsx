import React from 'react';

import { useSelector } from 'react-redux';

import Container from './assets/components/Container';
import Header from './assets/components/Header';
import Loader from './assets/components/Loader';
import Error from './assets/components/Error';

import './App.scss';


function App() {
    const isLoading = useSelector( state => state.products.status );
    const error = useSelector( state => state.products.error );

    return (
        <>
            { isLoading === 'loading'&&<Loader/> }
            { isLoading === 'rejected'&& <Error { ...error }/> }
            <div className="App"> 
                <Header/>
                <Container/>
            </div>
        </>
    );

}

export default App;
