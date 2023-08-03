import React from 'react'
import SectionHoc from '../HOC/SectionHoc'
import FilterStoriesData from '../FilterStoriesData';
const LatestStories = () => {
  const random=()=>{
    return Math.floor((Math.random()*74)+1);
   }
  return (
    <>
    <h1>LatestStories</h1>
     <div className='LatestStories'>
    <FilterStoriesData type={"type2"} id={random()} />       
    <FilterStoriesData type={"type2"} id={random()} />       
    <FilterStoriesData type={"type2"} id={random()} />       
  
    </div>
    </>
   
  )
} 
export default LatestStories;
