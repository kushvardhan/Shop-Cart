import { createSlice } from "@reduxjs/toolkit";

const NavSlice = createSlice({
    name:'nav',
    initialState:[],
    reducers:{
        addNav : (state,action)=>{
            return [...action.payload];
        },
    }
})

export const {addNav} = NavSlice.actions;
export default NavSlice.reducer;