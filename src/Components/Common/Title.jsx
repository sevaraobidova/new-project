import React from 'react'
import './Title.scss'

const Title = ({children, upperText}) => {
  return (
    <div className='title-container'>
      <span className='uppertitle'>{upperText}</span>
      <h2 className='maintitle'>{children}</h2>
      
    </div>
  )
}

export default Title
