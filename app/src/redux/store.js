import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/userSlice'
import activeImageSlice from './features/activeImageSlice';

export default configureStore({
    reducer: {
        user: userSlice,
        ActiveImage: activeImageSlice
    }
})