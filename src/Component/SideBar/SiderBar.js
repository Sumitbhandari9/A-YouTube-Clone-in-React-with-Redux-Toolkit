import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import PreviewIcon from '@mui/icons-material/Preview';

export const SiderBar = () => {

    const objforicons =[
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
        name:"Subscribe"
    },
    {
        icons:<PreviewIcon/>,
        name:"You"
    }
    ]

  return (
    <div style={{height:"40rem",width:'6.5rem',backgroundColor:'black',color:'white',paddingTop:'2rem', position:'fixed', marginTop:'4rem'}}>
        {objforicons.map((icon,i)=>{
            return(
                <>
                <div key={i}>
                <ul className='ul-main-sidebar' style={{listStyle:'none',display:'flex',flexDirection:'column',alignItems:"flex-start" }}>
                    <li>{icon.icons}</li>
                    <li style={{display:'flex',justifyContent:'center',alignItems:'center',width:'1.5rem'}}>{icon.name}</li>
                </ul>
                </div>
                </>
            )
        })}
    </div>
  )
}
