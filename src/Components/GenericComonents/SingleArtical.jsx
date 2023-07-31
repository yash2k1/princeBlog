import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Top from "../Header/Top";
import { NewsData } from "../Assets/NewsData";
import './SingleAritcalStyle.css'
import PostedBy from "./PostedBy";
import FilterStoriesData from "../FilterStoriesData";
const SingleArtical = () => {
  const NewsArrayIndex = useParams();
  const Id=NewsArrayIndex.NewsId-1;
  const data = useContext(NewsData);
  // console.log(data[NewsId-1].categories);
  console.log(Id);

 const [wordsToShow,setWordsToShow]=useState(50);
 const TextView=()=>{
  (wordsToShow!==-1)?setWordsToShow(-1)://increase text
  setWordsToShow(50);//increase decrese text
 } 
  return (
    <div>
      <div className="SingleAritcalHeader">
        <Link className="SingleAritcalBack" to={"/" + data[Id]?.categories}>
          <img className="BackImg" src="/images/arrow@2x.png" alt="not found" />
          Back</Link>
        <Top />

      </div>
    <div className="SingleAritcalBody">
    <div className="SingleAritcalHeading">{data[Id].heading}</div>
    <div className="writer">
      <PostedBy/>
      <div className="socialMedia">
      </div>
    </div>
    <img className="SingleAritcalImage" src={data[Id].images} alt="Not Found"/>
    <div className="SingleAritcalDescription">
      {data[Id].description.split(' ').slice(0,wordsToShow).join(' ')}
     {(wordsToShow!=-1)? <div onClick={TextView} className="showMore">⬇️ Show More</div>:<div onClick={TextView} className="showLess">⬆️ Show Less</div>}
      </div>
    <div className="writerInfo">
    <PostedBy/>
    </div>
    
    </div>
  <div className="MoreFromSiren">
    <FilterStoriesData type={"type6"} id={Id} />       
    <FilterStoriesData type={"type6"} id={Id+1} />       
    <FilterStoriesData type={"type6"} id={Id+2} />       
     
  </div>
   

    </div>
  );
};

export default SingleArtical;
