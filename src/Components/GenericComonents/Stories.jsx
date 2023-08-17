import React from 'react'
import { useNavigate } from 'react-router-dom'
import './StoriesStyle.css'
import PostedBy from './PostedBy'
const Stories = (props) => {
  // console.log(props?.heading?.split(' ').slice(1,10).join(' '));
  // console.log(props?.description);
  // console.log(props?.date?.split(' ').slice(1,10).join(' '));
  // console.log(props?.categories);
  // console.log(props?.id);
const navigate=useNavigate();
// props=date,heading.type,postBy,cat,description,id
const OpenSingleArtical=()=>{
// console.log(props)
  navigate(`/${props?.categories}/${props?.id}`)
}
// console.log(props.counter)
  return (
    
    <div className={props.type}>
      <img className="storieImages" onClick={OpenSingleArtical} src= {props?.images} alt='Not Found'/>
      <div className="storieHeading" onClick={OpenSingleArtical}>{props?.heading?.split(' ').slice(0,6).join(' ')+"..."}</div>
      {(props.type==='type6')&& <PostedBy/>}
      <div className="storieDescription">{props?.description &&props?.description?.split(' ').slice(0,props?.descriptionLength).join(' ') +"..."}</div>
      <div className="storiePostBy">{props?.postBy}</div>
      <div className="storieCounter">{props?.counter}</div>
      <div className="storieDate"><span>{props?.date && props?.categories}</span><span>{props?.date}</span></div>
    </div>
  )
}

export default Stories
