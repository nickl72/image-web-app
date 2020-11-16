import { createSlice } from '@reduxjs/toolkit';

export const imageListSlice = createSlice({
    name: 'imageList',
    initialState: {
        images: []
    },
    reducers: {
        setImageList: (state, action) => {
            let images = action.payload;
            images.forEach(img => {
                img.modal=false
            })
            console.log(images)
            state.images = images
        },
        clearImageList: (state) => {
            state.images = []
        }
    }
});

export const { setImageList, clearImageList } = imageListSlice.actions;

export const selectImageList = state => state.imageList.images;

export default imageListSlice.reducer;

