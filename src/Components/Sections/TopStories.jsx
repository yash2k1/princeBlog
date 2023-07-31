import React from 'react'
import SectionHoc from '../HOC/SectionHoc'
const TopStories = () => {
  return (
    <div style={{color:'white'}}>TopStories
    </div>

  )
}

const EnhancedTopStories= SectionHoc(TopStories);
export default EnhancedTopStories;
// export default SectionHoc(TopStories);
// export default TopStories;