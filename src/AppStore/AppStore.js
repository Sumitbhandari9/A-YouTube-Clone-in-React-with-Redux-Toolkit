import { configureStore } from '@reduxjs/toolkit'
import VideoSliceReducer from '../Slice/VideoSlice';
import WatchLaterSliceReducer from '../Slice/WatchLaterSlice';

export const AppStore = configureStore({
    reducer:{
        YVideos:VideoSliceReducer,
        WatchLaterVideos:WatchLaterSliceReducer
    }
});
