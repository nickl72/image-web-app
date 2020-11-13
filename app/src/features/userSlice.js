import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: null
    },
    reducers: {
        login: (state, action) => {
            console.log(action)
            state.username = action.payload;
        },
        logout: state => {
            state.username = null;
        }
    }
});

export const { login, logout } = userSlice.actions;

export const selectUser = state => state.user.username;

export default userSlice.reducer;

