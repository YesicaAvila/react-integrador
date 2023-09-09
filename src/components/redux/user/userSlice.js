import {createSlice} from '@reduxjs/toolkit';

const INITIAL_STATE = {
    currentUser: null,
    hiddenMenu: true,
};

const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUser: (state, action) => {
            console.log('Nuevo usuario:', action.payload);
            return {
                ...state,
                currentUser: action.payload,
            };
        },
        toggleMenuHidden: (state) => {
            console.log('Estado anterior de hiddenMenu:', state.hiddenMenu);
            return {
                ...state,
                hiddenMenu: !state.hiddenMenu,
            };
        },
    },
});

export const {
    setCurrentUser,
    toggleMenuHidden
} = userSlice.actions;

export default userSlice.reducer;