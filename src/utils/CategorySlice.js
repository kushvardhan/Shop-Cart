import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
    name: 'category',
    initialState: [],
    reducers: {
        addCategory: (state, action) => {
            return [...action.payload]; 
        },
    }
});

export const { addCategory } = CategorySlice.actions;
export default CategorySlice.reducer;
