import React from 'react'
import './Button.css'
import ButtonLabel from '../../atoms/ButtonLabel'

const Button = ({ onClick, label }) => {
  return (
    <button
      data-testid="button"
      className="button"
      onClick={onClick}
    >
        <ButtonLabel text={label} />
    </button>
  )
}

export default Button
