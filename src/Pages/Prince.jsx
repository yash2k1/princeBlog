import React from 'react'

const Prince = ({value}) => {
    console.log(value);
  return (
    <div>
      <h1>{value.name}</h1>
      <h1>{value.rollNo}</h1>
    </div>
  )
}

export default Prince
