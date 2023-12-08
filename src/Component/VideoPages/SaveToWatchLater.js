import React from 'react'
import { useSelector } from 'react-redux'
import YouTube from 'react-youtube'

export const SaveToWatchLater = () => {

    const {SaveWatchLater=[]}=useSelector((state)=>state.WatchLaterVideos)

  return (
    <>
        {
            SaveWatchLater?.map((item,i)=>{
                return(
                    <>
                    <YouTube videoId={item?.id?.videoId}/>
                    </>
                )
            })
        }
    </>
  )
}
