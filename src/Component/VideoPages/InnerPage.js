import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import YouTube from 'react-youtube'
import "../VideoPages/InnerPage.css"
import { getSaveWatchLater } from '../../Slice/WatchLaterSlice'

export const InnerPage = () => {

  const Navigate = useNavigate();
  const Dispatch = useDispatch();

  const {YoutubeVideos=[]}=useSelector((state)=>state?.YVideos)

  const params = useParams();
    const{id}=params;
    // console.log(id)
    const objforVideoPlay={
      playerVars:{
        autoplay:1
      }
    }

    function HandleSavetoWatchLater(id){
      Dispatch(getSaveWatchLater(id))
    }

  return (
    <>
       <div className='main-div-innerpage'> 
       <div className='for-block'>
       <YouTube id='iframe' style={{padding:'5rem 0 0 0.2rem'}} videoId={id} opts={objforVideoPlay}/>
       <div className='description-inner-play-video'>
        {YoutubeVideos?.map((item)=>{
          if(item?.id?.videoId ==id)
          return(
            <>
              <div className='inner-page-title' >{item?.snippet?.title}</div>
              <div className='inner-page-main-channel-btn'>
              <div className='inner-page-chaneltitle'>{item?.snippet?.channelTitle}</div>
              <button onClick={()=>HandleSavetoWatchLater(item)} className='inner-page-join-button' >Save</button>
              <button className='inner-page-subscribe-button'>Subscribe</button>
              </div>
              <div className='inner-page-datetime'>{item?.snippet?.publishTime}</div>

            </>
          )
        })}
       </div>
       </div>

          <div>
            <h3 style={{paddingTop:'5rem'}}>All Videos</h3>
            {
              YoutubeVideos?.map((item,i)=>{
                return(
                  <>
                  <div className='div-side-vides'>
                    <YouTube onStateChange={()=>{Navigate(`/InnerPage/${item?.id?.videoId}`)}} id='sidevideos-inner-page' videoId={item?.id?.videoId}/>
                    <div className='side-videos-title'>{item?.snippet?.title}</div>

                  </div>

                  </>
                )
              })
            }
          </div>

       </div>

       
    </>
  )
}
