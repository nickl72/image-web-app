import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/userSlice';
import activeImageSlice from '../features/activeImageSlice';
import imageListSlice from '../features/imageListSlice';
import authSlice from '../features/authSlice';

export default configureStore({
    reducer: {
        user: userSlice,
        activeImage: activeImageSlice,
        imageList: imageListSlice,
        auth: authSlice
    }
});