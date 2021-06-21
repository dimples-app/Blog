import React, {useEffect, useState} from 'react'
import {useLocation} from "react-router"
import { Link } from "react-router-dom";
import "./SinglePost.css"
import axios from "axios"

function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const singPostPhoto = "http://localhost:5000/images/";

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);
    return (
        <div className="singlePost">
      <div className="singlePostWrapper">
      {post.photo && (
          <img src={singPostPhoto + post.photo} alt="" className="singlePostImg" />
        )}

        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span>{new Date(post.createdAt).toDateString()} </span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
    )
}

export default SinglePost
