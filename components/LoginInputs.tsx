import React from 'react'
import Input from './Input'

const LoginInputs = () => {
  return (
    <>
        <Input name='email' placeholder='almamun_uxui@outlook.com' type='email' inputClass='w-full'/>
        <Input name='password' placeholder='***********' type='password' inputClass='w-full'/>
        <p className='texxt-[#46A358] text-end'>Forgot Password?</p>
    </>
  )
}

export default LoginInputs