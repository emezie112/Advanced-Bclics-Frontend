import React from 'react'
import './Post.css'


const Post = ({data}) => {
  return (
    <div className="Post">
      <div className="imgclass" >
        <img src={data.img} alt="" />
        
      </div>
      
    </div>
  )
}

export default Post