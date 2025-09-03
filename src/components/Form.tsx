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
    <form onSubmit={submitHandle}>
        <div>
         <div className='flex relative'>
          <input type='text' name='email'  value={email} onChange={handleInput} placeholder='Email Address' />
          {isError && <img src={ErrorIcon} className='absolute'  alt=''/> }
          <button type='submit' className='bg-red-400'><img src={Arrow} alt='' /> </button></div>
         </div>
        <p>{error}</p>
    </form>
  )
}

export default Form