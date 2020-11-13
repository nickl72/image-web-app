
import { createSlice } from '@reduxjs/toolkit';

export const activeImageSlice = createSlice({
    name: 'activeImage',
    initialState: {
        image: {
            id: null,
            title: null,
            path: null,
            description: null,
            edited: null,
            public: null,
            creator: null
        }
    },
    reducers: {
        setActiveImage: (state, action) => {
            state.image = action.payload
        },
        removeActiveImage: (state) => {
            state.image = {
                id: null,
                title: null,
                path: null,
                description: null,
                edited: null,
                public: null,
                creator: null
            }
        }
    }
});

export const { setActiveImage, resetActiveImage } = activeImageSlice.actions;

export const selectActiveImage = state => state.activeImage.image;
export const selectActiveImageId = state => state.activeImage.image.id;
export const selecActiveImagePath = state => state.activeImage.image.path;

export default activeImageSlice.reducer;

