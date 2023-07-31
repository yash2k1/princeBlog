import React,{useContext,useState} from 'react'
import { NewsData } from '../Assets/NewsData';
import '../Sections/SectionsStyle.css'
import FilterStoriesData from '../FilterStoriesData';
const SectionHoc=(WraperComponent)=> {

  function Hoc(props){
    const data=useContext(NewsData);// getting news data 
    // console.log(props?.name)//section name
    // console.log(props?.length)//how much stories
    // console.log(props?.loadMore)//loadMore icon will show if true
    // console.log(props?.type)//here type is the fasion in which css gona apply and which data gona rander
    // console.log(props?.initialIds)//here type is the fasion in which css gona apply and which data gona rander
    
    const [load,setLoad]=useState(props?.length)
    // console.log(data[load].images)//here imgContainer is require in Latest article
 console.log(load," iv" , props.initialIds)
    // load logic
    const increaseLoad=()=>{
      if(load*2<15){
        setLoad(load*2);
      }else{
        setLoad(15);
      }
    }
  
let count=0;
    
    return (
    <div className='SectionHoc'>
    <div className={props.name}>
     {
     data.map((item,index)=>{
       
      // increaseCount()
      
      (props.name==="TopPost")?((count<4)?count++:count=0):count=undefined;
      return(
        <div key={index}>
    <FilterStoriesData type={props.type} id={item.id} counter={count} />       
     </div>
      )
      
     }).slice(props?.initialIds-1,props?.initialIds-1+load)
   
    
     }
   {/* Load more feature works for Latest Artical and Top stories */}
     {
      (props?.loadMore && load<15)&& <div className="loadMore" onClick={increaseLoad} >
      <img src='/images/arrow@2x.png' alt="not found" className="loadMoreImg"/>  <span>LOAD MORE</span>
      </div>
     }
 
   </div>
    {
    (props.name==="LatestArticle"||props.name==="TopPost")?<WraperComponent img={data[0].images}/>:""
  }
    </div>
  ) 
  }
 return Hoc;
}

export default SectionHoc