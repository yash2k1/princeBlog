import React from 'react'
import SectionHoc from '../HOC/SectionHoc'

const TheLatest = () => {
  return (
    <div>
      TheLatest
    </div>
  )
}
const EnhancedTheLatest=SectionHoc(TheLatest);
export default EnhancedTheLatest;
