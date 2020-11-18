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
        originals: [],
        modal: false,
        index: null
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
                originals: [],
                modal:false,
                index: null
            }
        },
        openModal: (state) => {
            state.modal = true
        },
        closeModal: (state) => {
            state.modal = false
        }
    }
});

export const { setActiveImage, removeActiveImage, openModal, closeModal } = activeImageSlice.actions;

export const selectActiveImage = state => state.activeImage;
export const selectActiveImageId = state => state.activeImage.id;
export const selecActiveImagePath = state => state.activeImage.path;

export default activeImageSlice.reducer;

