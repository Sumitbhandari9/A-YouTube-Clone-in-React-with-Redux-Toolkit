import { createSlice } from '@reduxjs/toolkit'

const WatchLaterSlice = createSlice({
    name:"WatchLaterVideos",
    initialState:{
        SaveWatchLater:[]
    },
    reducers:{
       getSaveWatchLater:(state,action)=>{
            state.SaveWatchLater.push(action.payload)
        }
    }
})

export const{getSaveWatchLater}=WatchLaterSlice.actions;

export default WatchLaterSlice.reducer;