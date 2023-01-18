import React from 'react';
import CycleMan from '../assets/cycle-man.png';
import FacebookLogo from '../assets/facebook-icon.svg';
import GoogleLogo from '../assets/google-icon.svg';
import ArrowIcon from '../assets/arrow-icon.svg';
import { useNavigate } from 'react-router-dom';

import Button from '../components/button-component';
import Input from '../components/inputField-component';

function Homepage() {
  const navigate=useNavigate()
  const onClickHandler=() => {
    navigate("sign-up")
  }
  return (
    <div className='relative container mx-auto flex flex-col items-center'>
      <div className='absolute w-[300px] sm:w-auto top-3 lg:top-14  lg:left-24 z-10 text-center lg:text-left '>
        <h2 className='font-bold text-4xl mb-4 lg:mb-6'>Sign Up</h2>
        <div className='flex flex-col lg:flex-row text-center items-center gap-3 lg:gap-9 mb-4 lg:mb-8'>
          <div className='w-[80px]  bg-black h-1'></div>
          <p className='text-red-400'>Sign up with</p>
        </div>

        <div className='flex flex-col items-center md:flex-row gap-2 lg:gap-5 mb-1 lg:mb-3'>
          <Button title="Continue with Google" src={GoogleLogo}/>
          <Button title="Continue with Facebook" src={FacebookLogo}/>
        </div>

        <div className='lg:ml-60 mb-1 lg:mb-3'>
          <span className='font-bold text-2xl'>or</span>
        </div>

        
        <form action="" className=' mb-1 lg:mb-3' >
          <div className='flex flex-col md:flex-row mb-1 lg:mb-5 gap-1 lg:gap-3'>
            <Input type='text' value='abc' name='Name' />
            
            <Input type='email' value='abc@abc.com' name='Email'/>
          </div>
  
          <Input type='password' value='********' name='Password'  />
        </form>
        

        <div className='mb-2 lg:mb-5'>
          <label className="inline-flex items-start">
            <input type="checkbox" className="w-3 h-3 md:w-4 md:h-4 rounded mt-2"  />
            <span className="ml-1 lg:ml-5 h-[57px] break-words">I’ve read and agree with terms of service and our privecy policy</span>
          </label>
        </div>

        <button className='bg-[#FFB7D5]  w-full h-8 lg:w-20 lg:h-20 rounded-[35px] shadow-[0_10px_30px_rgba(255,183,213)] flex justify-center items-center mb-2 lg:mb-5' onClick={onClickHandler}>
          <img className='w-[23px] h-[23px]' src={ArrowIcon} alt="click" />
        </button>

        <span>Already have an account ?</span>
        <button className='text-[#FFB7D5] ml-5'>Sign In</button>
      </div>

      <img src={CycleMan} alt="Logo" className='hidden lg:block absolute lg:w-[600px] lg:h-[550px] xl:w-[800px] xl:h-[685px] lg:top-40  lg:right-0  right-0 xl:top-12 z-0'/>

    </div>
  )
}

export default Homepage;