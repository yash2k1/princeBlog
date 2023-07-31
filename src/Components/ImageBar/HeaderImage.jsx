import React,{useContext,useState,useEffect} from 'react'
import './HeaderImageStyle.css'
import { NewsData } from '../Assets/NewsData'
function HeaderImage() {
const data=useContext(NewsData)
// 1-75
const randomGenerator=()=>{
  return Math.floor(Math.random()*74) +1;
}
const [image1,setImage1]=useState(data[randomGenerator()].images );
const [image2,setImage2]=useState(data[randomGenerator()].images );
const [image3,setImage3]=useState(data[randomGenerator()].images );

useEffect(()=>{
  setTimeout(()=>{
    setImage1(data[randomGenerator()].images);
    setImage2(data[randomGenerator()].images);
    setImage3(data[randomGenerator()].images);
  },5000)

},[image1,image2,image3,data])

// const MemorisedNewsData=useMemo(()=> useContext(NewsData)
// ,[])

// useEffect(()=>{
//   const interval1=setInterval(()=>{
//   setImage1(data[randomGenerator()].images );
//   // const interval2= setImage2(data[randomGenerator()].images );
//   // const interval3= setImage3(data[randomGenerator()].images );
// },5000)
// return ()=>clearInterval(interval1);

// },[])
// useEffect(()=>{
//   const interval2=setInterval(()=>{
//   setImage2(data[randomGenerator()].images );
// },5000)
// return ()=>clearInterval(interval2);

// },[])
// useEffect(()=>{
  
//   const interval3=setInterval(()=>{
//   setImage3(data[randomGenerator()].images );
// },5000)
// return ()=>clearInterval(interval3);

// },[])


  return (
    <div className='HeaderImage'>
      
 <img src={image1} alt="HeaderImage1" className='HeaderImage1' />
 <img src={image2} alt="HeaderImage2" className='HeaderImage2' />
 <img src={image3} alt="HeaderImage3" className='HeaderImage3' />
    
    </div>
  )
}

export default HeaderImage
// import React,{useContext,useState,useEffect} from 'react'
// import './HeaderImageStyle.css'
// import { NewsData } from '../Assets/NewsData'
// function HeaderImage() {
// const data=useContext(NewsData)
// // 1-75
// const randomGenerator=()=>{
//   return Math.floor(Math.random()*74) +1;
// }
// const [image1Id,setImage1Id]=useState(randomGenerator() );
// const [image2Id,setImage2Id]=useState(randomGenerator() );
// const [image3Id,setImage3Id]=useState(randomGenerator() );

// useEffect(()=>{
//   setTimeout(()=>{
//     setImage1Id(randomGenerator());
//     setImage2Id(randomGenerator());
//     setImage3Id(randomGenerator());
//   },5000)

// },[image1Id,image2Id,image3Id,data])

// // const MemorisedNewsData=useMemo(()=> useContext(NewsData)
// // ,[])

// // useEffect(()=>{
// //   const interval1=setInterval(()=>{
// //   setImage1(data[randomGenerator()].images );
// //   // const interval2= setImage2(data[randomGenerator()].images );
// //   // const interval3= setImage3(data[randomGenerator()].images );
// // },5000)
// // return ()=>clearInterval(interval1);

// // },[])
// // useEffect(()=>{
// //   const interval2=setInterval(()=>{
// //   setImage2(data[randomGenerator()].images );
// // },5000)
// // return ()=>clearInterval(interval2);

// // },[])
// // useEffect(()=>{
  
// //   const interval3=setInterval(()=>{
// //   setImage3(data[randomGenerator()].images );
// // },5000)
// // return ()=>clearInterval(interval3);

// // },[])


//   return (
//     <div className='HeaderImage'>
   
//  <div className='HeaderImage1'><img src={data[image1Id].images} alt="HeaderImage1"  /><span className='HeaderCat'>{data[image1Id].heading.slice(0,100) }<span>{data[image1Id].date.slice(1,) }</span></span></div>
//  <div className='HeaderImage2'><img src={data[image2Id].images} alt="HeaderImage2"  /><span className='HeaderCat'>{data[image2Id].heading.slice(0,100) }<span>{data[image2Id].date.slice(1,) }</span></span></div>
//  <div className='HeaderImage3'><img src={data[image3Id].images} alt="HeaderImage3"  /><span className='HeaderCat'>{data[image3Id].heading.slice(0,100) }<span>{data[image3Id].date.slice(1,) }</span></span></div>
    
//     </div>
//   )
// }

// export default HeaderImage