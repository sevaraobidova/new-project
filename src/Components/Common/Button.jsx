import React from 'react'
import './Button.scss'

const Button = ({children}) => {
  return (
    <div>
      <button className='button'>{children}</button>
    </div>
  )
}

export default Button
