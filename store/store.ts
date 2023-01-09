import { configureStore, createSlice } from "@reduxjs/toolkit";

const video = createSlice({
    name: "videoReducer",
    initialState: [''],
    reducers:{
        getVideoForDetail: (state:Array<any> , action) => {
            state[0] = {arr : action.payload} ;
        }, // 클릭한 비디오의 정보
    }
});

const arrData = createSlice({
    name: "arrDataReducer",
    initialState: [''],
    reducers:{
        getArrDataForDetail: (state:Array<any> , action) => {
            state[0] = {data : action.payload} ;
        }, // 비디오 클릭할때 같이있던 Other Videos (Related Videos는 다른 API에서)
        getFromWhere: (state:Array<any> , action) => {
            state[1] = {fromWhere : action.payload} ;
        }, // 어디서 비디오를 클릭했는지 정보 // Other (장르, 검색, New) Videos
    }
});

export const { getVideoForDetail } = video.actions;
export const { getArrDataForDetail, getFromWhere } = arrData.actions;

export default configureStore({ reducer: { video : video.reducer, arrData : arrData.reducer } });
