"use client"
import React, { useState } from 'react'
import Input from './Input'
import { PasswordBox } from '@/public/images/icon';

const RegisterInputs = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
        <p className='text-[14px] font-normal leading-[16px] text-[#3D3D3D]'>Enter your email and password to register.</p>
        <Input name='username' placeholder='Username' type='text' inputClass='w-full'/>
        <Input name='email' placeholder='Enter your email address' type='email' inputClass='w-full'/>
        <div className='relative w-full'>
          <Input name='password' placeholder='Password' type={showPassword ? "text" : "password"} inputClass='w-full'/>
          <button type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-3 text-gray-500 focus:outline-none">
          {showPassword ? <PasswordBox/> : <PasswordBox/>}
        </button>
        </div>
        <Input name='confirmPassword' placeholder='Confirm Password' type='password' inputClass='w-full'/>
    </>
  )
}

export default RegisterInputs