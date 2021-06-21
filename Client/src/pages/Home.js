import React, {useState, useEffect} from 'react'
import "../App.css";
import Header  from '../component/Header/Header';
import Posts from '../component/Posts/Posts';
import SideBar from '../component/SideBar/SideBar';
import axios from "axios"

function Home() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get("/posts");
          setPosts(res.data);
        };
        fetchPosts();
      }, []);
    return (
        <>
        <Header  />
        <div className="home">
            <Posts posts={posts} />
            <SideBar />
                
        </div>
        </>
    )
}

export default Home
