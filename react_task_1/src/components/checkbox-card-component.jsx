import React from 'react';
import { useState } from 'react';

function CheckboxCard({title, src, para, checked, changeCheck}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = e => {
     setIsChecked(!isChecked);
  }
  
  return (
    <div className={`flex flex-col md:flex-row relative items-center mt-2 md:mt-5 p-4 md:p-7 w-3/4 md:h-[125px] lg:h-[86px] border-2  rounded-2xl`}>
      <div className='mr-8'>
        <img src={src} alt="some images" />
      </div>
      <div className=''>
        <h3 className='font-bold text-lg'>{title}</h3>
        <p>{para}</p>
      </div>
      <div className='absolute right-0 top-0 m-2 w-4 h-4'>
          <input type="checkbox" className=" w-full h-full focus:ring-transparent ring-transparent text-black rounded-full"  onChange={handleChange} checked={isChecked}/>
      </div>
    </div>
  )
}

export default CheckboxCard;