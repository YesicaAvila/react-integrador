import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    hiddenHamburguer: true,
};

const menuHamburguerSlice = createSlice({
    name: 'menu',
    initialState: INITIAL_STATE,
    reducers: {
        toggleMenuHamburguerHidden: (state) => {
            return {
                ...state,
                hiddenHamburguer: !state.hiddenHamburguer,
            };
        },
    },
});

export const { toggleMenuHamburguerHidden } = menuHamburguerSlice.actions;

export default menuHamburguerSlice.reducer;