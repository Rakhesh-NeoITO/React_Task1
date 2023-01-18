import React from 'react'

function Input({type, value, name}) {
 
  return (

    <div className='flex w-full flex-col gap-1 lg:gap-3'>
      <label htmlFor={name}>{name}</label>  
      <input type={type} placeholder={value} name={name} id={name} className={` h-12 rounded-lg border-2  p-5 bg-[#FAFDFF]`} />
      
    </div>
    );
}

export default Input