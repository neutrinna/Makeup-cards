import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async function() {
        try{ 
            // eslint-disable-next-line max-len
            const response = await fetch( 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' );
            if( !response.ok ) throw new Error( 'Something went wrong' );
            const data = await response.json();
            return data;}
        catch( error ){
            return isRejectedWithValue( error );
        }
    }
);

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        status: null,
        error: null,
        filterBtnState: false
    },
    reducers: {
        setLikeProp( state, action ){
            const products = state.products;
            const id = action.payload;
            const localStorageProducts = JSON.parse( localStorage.getItem( 'products' ));

            for ( let i = 0; i< products.length; i++ ){
                if ( products[ i ].id === id ){
                    if( products[ i ].isLiked === undefined ) products[ i ].isLiked = true;
                    else{
                        products[ i ].isLiked === true ? products[ i ].isLiked = false : products[ i ].isLiked = true; 
                    }
                    localStorageProducts[ i ] = products[ i ];
                }
            }
            localStorage.setItem( 'products', JSON.stringify( localStorageProducts ));
        },

        filterProducts( state ){
            state.filterBtnState = !state.filterBtnState;
            if( state.filterBtnState ){
                state.products = state.products.filter( product => product.isLiked === true );
            } else {
                state.products = JSON.parse( localStorage.getItem( 'products' ));
            }
        },

        deleteProductCard( state, action ){
            state.products = state.products.filter( product => product.id !== action.payload );
            let localStorageProducts = JSON.parse( localStorage.getItem( 'products' ));
            localStorageProducts = localStorageProducts.filter( product => product.id !== action.payload );
            localStorage.setItem( 'products', JSON.stringify( localStorageProducts ));
        }
    },
    extraReducers: {
        [ fetchProducts.pending ]: ( state ) => {
            state.status = 'loading';
            state.error = null;
        },
        [ fetchProducts.fulfilled ]: ( state, action ) => {
            state.status = 'resolved';
            state.products = action.payload;
            localStorage.setItem( 'products', JSON.stringify( state.products ));
        },
        [ fetchProducts.rejected ]: ( state, action ) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
});

export const { setLikeProp, filterProducts, deleteProductCard } = productsSlice.actions;

export default productsSlice.reducer;