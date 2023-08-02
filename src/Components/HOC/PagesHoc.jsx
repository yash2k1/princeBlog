import React from 'react'
import EnhancedTopStories from '../Sections/TopStories';
import EnhancedTopPost from '../Sections/TopPost';
import './PagesHocStyle.css'
import Navbar from '../Header/Navbar';

const PagesHoc = () => {
  const Hoc=(props)=>{
    
    return (
      <>
  <Navbar/>
    <div className='PagesHoc' id='PagesHoc'>
  <div className="topStoriesPage">
    <span className='TopStoriesPageSpan' >{props.name}</span>
  <EnhancedTopStories initialIds={props.initialIds} name={"TopStories"} length={6} loadMore={true} type={"type4"}/>
  </div>
<div className="TopPostPage">
<span >TopPost</span>
<EnhancedTopPost initialIds={props.initialIds} name={"TopPost"} length={4} loadMore={false} type={"type5"} />
</div>
    </div>
</>
  )
  }
  return Hoc;

}
export default PagesHoc;
