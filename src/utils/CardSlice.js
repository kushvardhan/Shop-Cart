import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
    name:'card',
    initialState:[],
    reducers:{
        addData : (state,action)=>{
            return action.payload;
        },
    }
})

export const {addData} = CardSlice.actions;
export default CardSlice.reducer;