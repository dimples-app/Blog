import React from 'react'
import "../App.css";
import Header  from '../component/Header';
import Posts from './Posts';
import SideBar from '../component/SideBar';

function Home() {
    return (
        <>
        <Header  />
        <div className="home">
            <Posts />
            <SideBar />
                
        </div>
        </>
    )
}

export default Home
