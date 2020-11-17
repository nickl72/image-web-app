import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        showAuth: false
    },
    reducers: {
        authOn: state => {
            state.showAuth = true
        },
        authOff: state => {
            state.showAuth = false
        },
        toggleAuth: state => {
            state.showAuth = !state.showAuth
        }

    }
});

export const { authOn, authOff, toggleAuth } = authSlice.actions;

export const selectShowAuth = state => state.auth.showAuth;

export default authSlice.reducer;

