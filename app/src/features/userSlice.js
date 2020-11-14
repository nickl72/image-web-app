import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: null,
        userId: null
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.username = action.payload.username
            state.userId = action.payload.id
        },
        logout: state => {
            state.username = null;
        }
    }
});

export const { loginSuccess, logout } = userSlice.actions;

export const selectUser = state => state.user.username;

export default userSlice.reducer;

