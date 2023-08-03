import React from 'react'
import FilterStoriesData from '../FilterStoriesData';
const TheLatest = () => {
  const random=()=>{
    return Math.floor((Math.random()*74)+1);
   }
  return (
    <div className='TheLatest'>

  <FilterStoriesData type={"type3"} id={random()} />       
  <FilterStoriesData type={"type3"} id={random()} />       
  <FilterStoriesData type={"type3"} id={random()} />       
</div>
  )
}
export default TheLatest;
