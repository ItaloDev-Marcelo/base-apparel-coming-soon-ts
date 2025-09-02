import React, { useState } from 'react'

const Form = () => {

  const [email, setEmail] = useState('');
  const [error, setError]  = useState('')
  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const submitHandle = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
      if(!emailRegex.test(email)) setError('Please provide a valid email')
      if(email.length === 0) setError("Can't be blank")
      if(emailRegex.test(email)) setError('')

  }


  return (
    <form onSubmit={submitHandle}>
        <input type='text' name='email' value={email} onChange={handleInput} placeholder='Email Address' />
        <button type='submit'>Arrow</button>
        <p>{error}</p>
    </form>
  )
}

export default Form