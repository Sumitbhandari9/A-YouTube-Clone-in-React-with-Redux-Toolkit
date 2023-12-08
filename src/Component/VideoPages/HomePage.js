import React from 'react'
import { useSelector } from 'react-redux'
import YouTube from 'react-youtube'
import '../VideoPages/HomePage.css'
import { useNavigate } from 'react-router'
import { SiderBar } from '../SideBar/SiderBar'

export const HomePage = (props) => {
    const {HandleVideosInnerPage=[]}=props||{}

      const Navigate=useNavigate("");

  const {YoutubeVideos=[]}=useSelector((state)=>state?.YVideos)

  const objforVideoPlay={
    playerVars:{
      autoplay:1
    }
  }

  return (
    <>
    <SiderBar/>
    <div style={{backgroundAttachment:'fixed'}} className='HomePageVideos'>
      {
        YoutubeVideos?.map((item,i)=>{
          return(
            <div  className='HvideosSdiv' key={i}>
              <div style={{cursor:'pointer'}} className='Youtubetagdiv'>
                <YouTube onStateChange={()=>{Navigate(`/InnerPage/${item?.id?.videoId}`)}} videoId={item?.id?.videoId} opts={"objforVideoPlay"}/>
              </div>
              <div className='seconddivfordescription'>
                <div className='div-for-title'>{item?.snippet?.title}</div>
                <img style={{borderRadius:'50%'}} src={item?.channelImage?.image} alt="" /><div className='div-for-channel-name'>{item?.snippet?.channelTitle}</div>
                <div className='div-for-date&time'><time dateTime={item?.snippet?.publishedAt}/></div>
              </div>

            </div>
          )
        })
      }
    </div>
    </>
  )
}
