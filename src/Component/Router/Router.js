import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Yapidata, useCustomHookForYoutubeApi } from '../../CustomHook/MainHookForApi'
import { Header } from '../Header/Header';
import { BarsSideBar } from '../CSiderBar/BarsSideBar';
import { useState } from 'react';
import { BackDropSidebar } from '../CSiderBar/BackDropSidebar';
import { HomePage } from '../VideoPages/HomePage';
import { InnerPage } from '../VideoPages/InnerPage';
import { useDispatch } from 'react-redux';
import { SaveToWatchLater } from '../VideoPages/SaveToWatchLater';


export const MainRouter =()=>{

    const Dispatch = useDispatch("")

    const [sidebar,setSidebar] = useState(false);

    const handlesidebar = ()=>{
        setSidebar(!sidebar)
        // console.log("Sumit")
    }



    useCustomHookForYoutubeApi();

    return(
        <>
        <BrowserRouter>
        <Header handlesidebar={handlesidebar}/>
        <BackDropSidebar sidebar={sidebar} handlesidebar={handlesidebar}/>
        <BarsSideBar sidebar={sidebar}/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/InnerPage/:id' element={<InnerPage/>}/>
                <Route path='/SaveToWatchLater' element={<SaveToWatchLater/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}