import React from 'react'
import SectionHoc from '../HOC/SectionHoc'

const LatestArticle = (props) => {
  return ( 
    <img src={props.img} alt="not found" />
  )
}
const EnhancedLatestArticle=SectionHoc(LatestArticle);
export default EnhancedLatestArticle;

// export default SectionHoc(LatestArticle);
