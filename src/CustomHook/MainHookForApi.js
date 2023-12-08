import { useEffect } from "react"
import axios from 'axios'
import { useDispatch } from "react-redux"
import { getVideos } from "../Slice/VideoSlice";


export const useCustomHookForYoutubeApi = ()=>{
    const dispatch =useDispatch();

     const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

    useEffect(()=>{
        const HandleApi =async()=>{
            const Yapidata =await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=50&key=${API_KEY}&part=snippet&type=video&channelId`);
            dispatch(getVideos(Yapidata.data.items))
            // console.log(Yapidata.data.items)
        }
        HandleApi();
    })
}

// export const {Yapidata}=useCustomHookForYoutubeApi
