import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async function() {
        try{ 
            const response = await fetch( 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' );
            if( !response.ok ) throw new Error( 'Something went wrong' );
            const data = await response.json();
            console.log(data);
            return data;}
        catch( error ){
            return isRejectedWithValue( error.message );
        }
    }
);

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        status: null,
        error: null,
    },
    reducers: {
        
    },
    extraReducers: {
        [ fetchProducts.pending ]: ( state ) => {
            state.status = 'loading';
            state.error = null;
        },
        [ fetchProducts.fulfilled ]: ( state, action ) => {
            state.status = 'resolved';
            state.products = action.payload;
        },
        [ fetchProducts.rejected ]: ( state, action ) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
});

export const { refreshProducts } = productsSlice.actions;

export default productsSlice.reducer;