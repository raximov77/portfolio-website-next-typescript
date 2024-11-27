import React from 'react'
import Input from './Input'

const RegisterInputs = () => {
  return (
    <>
        <Input name='username' placeholder='Username' type='text' inputClass='w-full'/>
        <Input name='email' placeholder='Enter your email address' type='email' inputClass='w-full'/>
        <Input name='password' placeholder='Password' type='password' inputClass='w-full'/>
        <Input name='confirmPassword' placeholder='Confirm Password' type='password' inputClass='w-full'/>
    </>
  )
}

export default RegisterInputs