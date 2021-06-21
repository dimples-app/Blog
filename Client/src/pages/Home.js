import React from 'react'
import "../App.css";
import Header  from '../component/Header/Header';
import Posts from '../component/Posts/Posts';
import SideBar from '../component/SideBar/SideBar';

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
