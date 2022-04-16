import React from 'react'
import "./post.css"

function Post() {
  return (
    <div className="post">
        <img src="https://images.pexels.com/photos/5727885/pexels-photo-5727885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" 
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <sapn className="postTitle">
                Lorem ipsum dolor sit. 
            </sapn>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc"> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, sequi omnis at soluta accusantium quidem eveniet unde iusto fugiat incidunt quia provident sapiente perspiciatis, dicta nostrum! Nisi perspiciatis facere adipisci aspernatur laudantium nemo saepe similique! Quod placeat laudantium dolor saepe modi tempore id inventore cum fugit aliquam eum perspiciatis voluptate animi ratione reiciendis quia maiores, soluta nihil! Vel veniam est, quam nemo beatae dolores sunt voluptas voluptatem animi consequuntur distinctio aut aliquid tenetur saepe natus molestias ad autem impedit asperiores laboriosam cum. Reiciendis maxime dolorem blanditiis laudantium natus nulla, rerum vero possimus labore architecto corporis quibusdam quos, veritatis et fuga.
        </p>
    </div>
  )
}

export default Post