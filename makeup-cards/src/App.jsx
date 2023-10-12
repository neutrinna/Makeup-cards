import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { useSelector } from 'react-redux';

import Container from './assets/components/Container';
import Header from './assets/components/Header';
import Loader from './assets/components/Loader';
import Error from './assets/components/Error';

import './App.scss';


function App() {
    const isLoading = useSelector( state => state.products.status );
    const error = useSelector( state => state.products.error );
    const nodeRef = useRef( null );

    return (
        <>
            <CSSTransition nodeRe ={ nodeRef } in = { isLoading === 'loading' }
                timeout = { 1000 } classNames = "Loader" mountOnEnter unmountOnExit >
                <div ref = { nodeRef }>
                    <Loader /> 
                </div>
            </CSSTransition>
            { isLoading === 'rejected'&& <Error { ...error }/> }
            <div className="App"> 
                <Header/>
                <Container/>
            </div>
        </>
    );

}

export default App;
