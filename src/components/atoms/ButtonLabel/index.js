import React from 'react'
import './ButtonLabel.css'

const ButtonLabel = ({ text }) => {
  return (
    <div data-testid="button-label" className="button-label">{text}</div>
  )
}

export default ButtonLabel
