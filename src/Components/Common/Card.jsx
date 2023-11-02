import React from 'react'
import './Card.scss'

const Card = ({children}) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  )
}

export default Card
