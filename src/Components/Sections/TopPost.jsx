import React from 'react'
import SectionHoc from '../HOC/SectionHoc'
function TopPost() {
  return (
      <div className="adv">
      Advertistement
      </div>
  )
}
const EnhancedTopPost=SectionHoc(TopPost);
export default EnhancedTopPost;