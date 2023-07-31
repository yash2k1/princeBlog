import React from 'react'
import SectionHoc from '../HOC/SectionHoc'
const LatestStories = () => {
  return (
    <div>
      LatestStories
    </div>
  )
} 
const EnhancedLatestStories=SectionHoc(LatestStories);

export default EnhancedLatestStories;
