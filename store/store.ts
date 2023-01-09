import { configureStore, createSlice } from "@reduxjs/toolkit";

const video = createSlice({
    name: "videoReducer",
    initialState: [''],
    reducers:{
        getVideoForDetail: (state:Array<any> , action) => {
            state[0] = {arr : action.payload} ;
        },
    }
});

const arrData = createSlice({
    name: "arrDataReducer",
    initialState: [''],
    reducers:{
        getArrDataForDetail: (state:Array<any> , action) => {
            state[0] = {data : action.payload} ;
        },
        getFromWhere: (state:Array<any> , action) => {
            state[1] = {fromWhere : action.payload} ;
        },
    }
});


export const { getVideoForDetail } = video.actions;
export const { getArrDataForDetail, getFromWhere } = arrData.actions;

export default configureStore({ reducer: { video : video.reducer, arrData : arrData.reducer } });