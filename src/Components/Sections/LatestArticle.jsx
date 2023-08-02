import React, { useContext } from 'react'
import { NewsData } from '../Assets/NewsData'
const LatestArticle = () => {
  const data=useContext(NewsData)
console.log(data)
  return ( 
  
    <img src={data[Math.floor(Math.random()*74)+1].images} alt="not found" className='LatestArticleImg' />
  )
}
export default LatestArticle;

// export default SectionHoc(LatestArticle);
