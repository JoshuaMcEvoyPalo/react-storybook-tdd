import React from 'react'
import './Link.css'

const Link = ({ link, text }) => {
  return (
    <a data-testid="link" className="link" href={link}>{text}</a>
  )
}

export default Link
