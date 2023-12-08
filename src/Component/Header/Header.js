import React, { useEffect, useState } from 'react'
import '../Header/Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import MicNoneIcon from '@mui/icons-material/MicNone';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CircleIcon from '@mui/icons-material/Circle';
import { SiderBar } from '../SideBar/SiderBar';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { getSearchVideos } from '../../Slice/VideoSlice';

export const Header = ({handlesidebar}) => {
    const Navigate =useNavigate();
    const Dispatch =useDispatch();

    const [search, setSearch] = useState();
    // const {handlesidebar=[]}=props||{}

    useEffect(()=>{
        Dispatch(getSearchVideos(search))
    },[search])


  return (
    <>
        <header className='MainLayer' style={{position:'fixed'}}>
            <div className='menulogo'>
                <div onClick={handlesidebar}><MenuIcon className='menu'/></div>
                <div onClick={()=>Navigate('/')} >
                    <YouTubeIcon className='logo'/><span className='Youtube'>YouTube</span>
                </div>
            </div>
            <div className='searchmicro'>
                <input type="search" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)} className='input'/>
                <SearchIcon className='searchicon'/>
                <div>
                    <MicNoneIcon className='microicon'/>
                </div>
            </div>
            <div className='notifyemail'>
                <VideoCallIcon className='videoicon'/>
                <div>
                    <NotificationsIcon className='notifyicon'/>
                    <span className='NBellCount'>9+</span>
                </div>
                <div>
                    <CircleIcon className='idicon'/>
                </div>
            </div>
        </header>
        {/* <SiderBar/> */}
    </>
  )
}
