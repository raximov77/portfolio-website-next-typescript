"use client"
import React, { useState } from 'react'
import Input from './Input'
import { PasswordBox } from '@/public/images/icon';

const NewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
        <p className='text-[14px] font-normal leading-[16px] text-[#3D3D3D] mb-5'>Enter your new password</p>
        <div className='relative w-full'>
          <Input name='newPassword' placeholder='Enter new password' type={showPassword ? "text" : "password"} inputClass="w-full pr-10 mb-4"/>
          <button type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-3 text-gray-500 focus:outline-none">
          {showPassword ? <PasswordBox/> : <PasswordBox/>}
        </button>
        </div>
        <Input name='otp' placeholder='Enter code' type='text' inputClass='w-full'/>
    </div>
  )
}

export default NewPassword