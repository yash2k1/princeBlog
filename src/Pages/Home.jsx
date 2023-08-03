import React from 'react'
import HeaderImage from '../Components/ImageBar/HeaderImage'
import './HomeStyle.css'
import FilterStoriesData from '../Components/FilterStoriesData'
import Navbar from '../Components/Header/Navbar'
import LatestArticle from '../Components/Sections/LatestArticle'
import TheLatest from '../Components/Sections/TheLatest'
import LatestStories from '../Components/Sections/LatestStories'
function Home() {
const random=()=>{
 return Math.floor((Math.random()*74)+1);
}
  return (

 <>
    <Navbar/>
<HeaderImage/>
<div className="upper">
<h1>The Latest</h1>
<TheLatest/>

</div>
  <div className="mid">
<div className="midFirst">
  
<LatestArticle />


</div>
<div className="midSecond">
<h1> TopPost</h1>
<div className='TopPost'>
<img className="adv" style={{objectFit:"cover" ,height:"550px"}} alt="not found"src="https://mediasamosa.com/wp-content/uploads/2020/01/printad-696x985.jpg"/>
  <div>
<FilterStoriesData type={"type5"} id={random()} counter={"1"} />       
</div>
<div>
<FilterStoriesData type={"type5"} id={random()} counter={"2"} />       
</div>
<div>
<FilterStoriesData type={"type5"} id={random()} counter={"3"} />       
</div>
<div>
<FilterStoriesData type={"type5"} id={random()} counter={"4"} />       
</div>
</div>
</div>
  </div>
  <div className="bottom">
<LatestStories/>
  </div>

 </>
  )
}

export default Home