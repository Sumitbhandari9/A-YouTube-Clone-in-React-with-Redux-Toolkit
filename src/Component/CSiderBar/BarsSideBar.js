import React from 'react'
import '../CSiderBar/BarsSideBar.css'
import HomeIcon from '@mui/icons-material/Home';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SportsIcon from '@mui/icons-material/Sports';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import DiamondIcon from '@mui/icons-material/Diamond';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { useNavigate } from 'react-router';


export const BarsSideBar = ({sidebar}) => {
    const Navigate = useNavigate();

    const object = [
        {
            icons:<HomeIcon/>,
            name:"Home"
        },
        {
            icons:<SlowMotionVideoIcon/>,
            name:"Shorts"
        },
        {
            icons:<SubscriptionsIcon/>,
            name:"Subscriptions"
        },
        {
            icons:<HistoryIcon/>,
            name:"History"
        },
        {
            icons:<AccessTimeIcon onClick={()=>Navigate("/SaveToWatchLater")}/>,
            name:"Watch Later"
        },
        {
            icons:<ThumbUpOffAltIcon/>,
            name:"Liked Videos"
        },
        {
            icons:<TrendingUpIcon/>,
            name:"Trending"
        },
        {
            icons:<ShoppingBagIcon/>,
            name:"Shopping"
        },
        {
            icons:<MusicNoteIcon/>,
            name:"Music"
        },
        {
            icons:<LocalMoviesIcon/>,
            name:"Movies"
        },
        {
            icons:<OnlinePredictionIcon/>,
            name:"Live"
        },
        {
            icons:<SportsEsportsIcon/>,
            name:"Gaming"
        },
        {
            icons:<NewspaperIcon/>,
            name:"News"
        },
        {
            icons:<SportsIcon/>,
            name:"Sports"
        },
        {
            icons:<LocalLibraryIcon/>,
            name:"Learning"
        },
        {
            icons:<DiamondIcon/>,
            name:"Fashion & Beauty"
        },
        {
            icons:<ProductionQuantityLimitsIcon/>,
            name:"Products"
        },
    ]

  return (
    <>
        <div className={sidebar?"SiderbarShow SidebarHide":"SiderbarShow"} style={{position:'fixed'}}>
            {object?.map((item,index)=>{
                return(
                    <>
                        <ul key={index} className='ul-sidebar'> 
                            <li  className='li=sidebar'>{item.icons}</li>
                            <li className='li=sidebar'>{item.name}</li>
                        </ul>
                    </>
                )
            })}
        </div> 
    </>
  )
}
