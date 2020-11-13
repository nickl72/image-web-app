import { createSlice } from '@reduxjs/toolkit';

export const activeImageSlice = createSlice({
    name: 'activeImage',
    initialState: {
        id: null,
        title: null,
        path: null,
        description: null,
        edited: null,
        public: null,
        creator: null,
        originals: []
    },
    reducers: {
        setActiveImage: (state, action) => {
            for (const [key, value] of Object.entries(action.payload)) {
                state[key] = value
            }
        },
        removeActiveImage: (state) => {
            state = {
                id: null,
                title: null,
                path: null,
                description: null,
                edited: null,
                public: null,
                creator: null,
                originals: []
            }
        }
    }
});

export const { setActiveImage, resetActiveImage } = activeImageSlice.actions;

export const selectActiveImage = state => state.activeImage;
export const selectActiveImageId = state => state.activeImage.id;
export const selecActiveImagePath = state => state.activeImage.path;

export default activeImageSlice.reducer;

