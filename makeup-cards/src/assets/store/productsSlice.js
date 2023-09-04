import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        value: [],
    },
    reducers: {
        refreshProducts: async( state ) => {
            const response = await fetch( 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' )
            const data = await response.json();

            state.value = data;
            console.log(data);
        },
    },
});

export const { refreshProducts } = productsSlice.actions;

export default productsSlice.reducer;