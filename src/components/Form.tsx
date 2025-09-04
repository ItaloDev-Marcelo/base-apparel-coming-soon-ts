import React, { useState } from 'react'
import Arrow from '../assets/images/icon-arrow.svg';
import ErrorIcon  from '../assets/images/icon-error.svg'
const Form = () => {

  const [email, setEmail] = useState('');
  const [error, setError]  = useState('')
  const [isError, setIsError]  = useState(false)
  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const submitHandle = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
      if(!emailRegex.test(email)) {
        setError('Please provide a valid email')
        setIsError(true)
      }
      if(email.length === 0) {
        setError("Can't be blank")
         setIsError(true)
      }


      if(emailRegex.test(email)) {
        setError('') 
        setIsError(false)
      }

  }


  return (
    <form onSubmit={submitHandle} >
        <div className='flex items-center justify-center xl:justify-start xl:items-start my-4 xl:mx-0 mx-auto w-[330px] xl:w-[450px]'>
         <div className={`flex relative border-1 border-gray-300 rounded-3xl w-[290px] xl:w-[410px] h-10 xl:h-11 ${isError && 'border-red-400'} `}>
          <input type='text' name='email' className={`w-[80%] ml-4 ${isError && 'placeholder-Red-0'} `}  value={email} onChange={handleInput}
           placeholder='Email Address' />
          {isError && <img src={ErrorIcon} className='absolute top-2 right-[30%] xl:right-[25%]'  alt=''/> }
          <button type='submit' className='bg-gradient-to-br from-[#F8BFBF] to-[#EE8C8C] w-[20%]  rounded-3xl  '><img src={Arrow} alt='' className='m-auto' /> </button></div>
         </div>
        <p className='ml-7 xl:ml-2 text-Red-0'>{error}</p>
    </form>
  )
}

export default Form