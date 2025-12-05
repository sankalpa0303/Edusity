import React from 'react'
import './Title.css'

const tittle = ({subTitle,title}) => {
  return (
    <div className='title'>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  )
}

export default tittle
