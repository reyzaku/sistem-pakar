import React from 'react'

const card = (props) => {
  return (
      <button className={`${props.color} text-${props.text} w-full h-48 rounded-xl text-xl font-bold transition ease-in-out ${props.hover}`}>
          {props.title}
      </button>
  )
}

export default card