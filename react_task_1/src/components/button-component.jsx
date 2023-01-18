import React from 'react'

function Button({title, src}) {
  return (
    <button className='flex items-center w-[245px] h-12 border-2 justify-center gap-4 rounded-md'>
      <img src={src} alt={title} className='w-6 h-6'/>
      <span className='text-xs'>{title}</span>
    </button>
  )
}

export default Button