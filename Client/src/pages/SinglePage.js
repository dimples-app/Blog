import React from 'react'
import SideBar from '../component/SideBar/SideBar'
import SinglePost from '../component/SinglePost/SinglePost'

function SinglePage() {
    return (
        <div className="single">
            <SinglePost />
            <SideBar />
            
        </div>
    )
}

export default SinglePage
