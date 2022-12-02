import React from 'react'
import { Link } from 'react-router-dom';

const card = (props) => {
  return (
      <Link to={`/${props.link}`} className={`${props.color} text-${props.text} w-full h-48 flex justify-center items-center rounded-xl text-xl font-bold transition ease-in-out ${props.hover}`}>
          {props.title}
      </Link>
  )
}

export default card