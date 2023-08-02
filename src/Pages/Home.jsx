import React from 'react'
import HeaderImage from '../Components/ImageBar/HeaderImage'
import './HomeStyle.css'
import FilterStoriesData from '../Components/FilterStoriesData'
import Navbar from '../Components/Header/Navbar'
import LatestArticle from '../Components/Sections/LatestArticle'
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
  <div className='TheLatest'>

  <FilterStoriesData type={"type3"} id={random()} />       
  <FilterStoriesData type={"type3"} id={random()} />       
  <FilterStoriesData type={"type3"} id={random()} />       
</div>

</div>
  <div className="mid">
<div className="midFirst">
<h1> Latest Article</h1>
<div className='LatestArticle'>

<FilterStoriesData type={"type4"} id={random()} />       
<FilterStoriesData type={"type4"} id={random()} />       
<FilterStoriesData type={"type4"} id={random()} />       
<FilterStoriesData type={"type4"} id={random()} />       
<LatestArticle />

 </div>   


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
    <h1>LatestStories</h1>
<div className='LatestStories'>
  <FilterStoriesData type={"type2"} id={random()} />       
  <FilterStoriesData type={"type2"} id={random()} />       
  <FilterStoriesData type={"type2"} id={random()} />       

  </div>
  </div>

 </>
  )
}

export default Home