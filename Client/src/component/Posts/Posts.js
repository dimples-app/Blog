import React from 'react'
import "./Posts.css"
import Post from '../Post/Post'


function Posts(props) {
    const {posts} = props;
    return (
        <div className="posts">
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
    )
}

export default Posts
