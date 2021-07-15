import React from 'react'
import {Link} from "react-router-dom"
import "./Post.css"

function Post(props) {
  const {post} = props;
  const photoes = "http://localhost:5000/images/"
    return (
        <div className="post">
        { post.photo && 
          <img
            className="postImg" src={photoes + post.photo}
            alt=""
          /> 
        }
        <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <div key={c.id}>
            <span className="postCat">{c.name}</span>
            </div>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
      </div>
    )
}

export default Post
