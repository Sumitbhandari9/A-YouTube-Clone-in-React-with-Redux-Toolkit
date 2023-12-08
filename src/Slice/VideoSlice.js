import { createSlice } from '@reduxjs/toolkit'

const VideoSlice = createSlice({
    name:"Videos",
    initialState:{
        YoutubeVideos:[],
        YoutubeInnerPage:[],
        SaveWatchLater:[]
        // search:[]
    },
    reducers:{
        getVideos:(state,action)=>{
            state.YoutubeVideos=action.payload
        },
        getInnerPageVideos:(state,action)=>{
            state.YoutubeInnerPage=action.payload
        },
        getSearchVideos:(state,action)=>{
            state=Object.assign(state,action.payload)
        }
    }
})

export const{getVideos,getInnerPageVideos,getSearchVideos,getSaveWatchLater}=VideoSlice.actions;

export default VideoSlice.reducer;