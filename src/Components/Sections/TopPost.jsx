import React from 'react'
import SectionHoc from '../HOC/SectionHoc'

function TopPost() {
  return (
    <img className="adv" style={{objectFit:"contain" ,height:"300px",}} alt="not found"src="https://mediasamosa.com/wp-content/uploads/2020/01/printad-696x985.jpg"/>

   
  )
}
const EnhancedTopPost=SectionHoc(TopPost);
export default EnhancedTopPost;