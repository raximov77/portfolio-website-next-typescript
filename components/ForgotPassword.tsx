import React from 'react'
import Input from './Input'


const ForgotPassword = () => {
  return (
    <div>
      <p className='text-[14px] font-normal leading-[16px] text-[#3D3D3D] mb-5'>Enter your email</p>
      <Input name='email' placeholder='almamun_uxui@gmail.com' type='email' inputClass='w-full'/>
    </div>
  )
}

export default ForgotPassword