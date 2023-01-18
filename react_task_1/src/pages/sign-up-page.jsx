import React from 'react'
import CheckboxCard from '../components/checkbox-card-component';
import ImageOne from '../assets/imageOne.svg';
import ImageTwo from '../assets/imageTwo.svg';



function SignUpPage() {
  // let def={
  //   button1:false,
  //   button2:false
  // }
  // const [checked, setChecked] = useState(def);

  // function changeCheck(e) {
  //   console.log(def)
  //   if(e.target.checked && e.target.name==="I'm a remote worker"){
  //     // def["button1"]=true
  //     def.button1=true
  //     def.button2=false
  //     setChecked(def)
  //   } 
  //   else if(e.target.checked && e.target.name==="I want to hire employees"){
  //     // def["button1"]=true
  //     def.button1=false
  //     def.button2=true
  //     setChecked(def)
  //   } 
  //   else{
  //     def.button1=false
  //     def.button2=false
  //     setChecked(def)
  //   }
  // }


  return (
    <div className='md:flex mx-auto items-center justify-center font-poppins'>
      <div className='w-full md:w-3/5 flex flex-col justify-center items-center  '>
        <p className='text-lg mt-2 md:mt-0'>Sign up to</p>
        <h2 className='text-4xl font-bold'>abc.com</h2>
        <p className='text-gray-400 w-3/4 md:w-auto mb-2 md:mb-20'>Are you looking for a remote job or hireing remote talent?</p>
        <CheckboxCard title="I'm a remote worker" para="I’m an employee looking for a remote job" id="1" src={ImageOne} />
        <CheckboxCard title="I want to hire employees" para="I’m on employer hiring remote talent" id="2" src={ImageTwo} />
        <div className='mt-4 md:mt-20'>
          <span >Already have an account ?</span>
          <button className='ml-5 font-semibold'>Sign In</button>
        </div>
      </div>
      <div className="relative  md:w-2/5 bg-image md:h-screen bg-no-repeat bg-cover   ">
        <div className='absolute flex flex-col items-center top-4 md:top-24 lg:top-36'>
          <p className=' md:break-words w-3/4 lg:w-2/3  font-bold md:text-xl md:mb-5'>
            abc.com is the best place to find remote talent. We’ve been super impress by the quality of applicants.
          </p>
          <div className='w-3/4 lg:w-2/3 mb-3 lg:mb-0'>
            <div className='flex items-center gap-2'>
              <div className='border-t-2 border-black w-7 bg-black'></div>
              <p>Madhushan sasanka</p>
            </div>
            <p className='text-gray-400'>CEO,abc.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage;