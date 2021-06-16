import React from 'react'

function Post() {
    return (
        <div className="post">
        <img
          className="postImg"
          src="https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">
                Music   
            </span>
            <span className="postCat">
                Life
            </span>
          </div>
          <span className="postTitle">
              Lorem ipsum dolor sit amet
          </span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
          fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
          atque, exercitationem quibusdam, reiciendis odio laboriosam?
        </p>
      </div>
    )
}

export default Post
