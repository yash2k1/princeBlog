import React from 'react'
import './PostedByStyle.css'
const PostedBy = (props) => {
  return (
    <div className='PostedBy'>
      <img className='PostedByImg' src="/images/profile.jpg" alt="not found" />
      <div className="ProfileName">Yash Gupta</div>
      <div className="ProfileDate">{(props?.date)? props?.date: "Jan 28, 2019"} · 10 min read</div>
    </div>
  )
}

export default PostedBy
