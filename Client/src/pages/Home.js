import React, {useState, useEffect} from 'react'
import "../App.css";
import Header  from '../component/Header/Header';
import Posts from '../component/Posts/Posts';
import SideBar from '../component/SideBar/SideBar';
import axios from "axios"
import { useLocation } from "react-router";

function Home() {
     
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
    
    useEffect(() => {
        const fetchPosts = async () => {
          const response = await axios.get("/posts" + search);
          setPosts(response.data);   
        };
        fetchPosts();
      }, [search]);
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
