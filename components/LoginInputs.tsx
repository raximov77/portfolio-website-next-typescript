"use client"
import React, { SetStateAction, useState } from 'react'
import Input from './Input'
import { PasswordBox } from '@/public/images/icon'


interface LoginType {
  setIsLogin:React.Dispatch<SetStateAction<"login" | "register" | "verifyRegister" | "forgotPassword" | "newPassword">>
}

const LoginInputs:React.FC<LoginType> = ({setIsLogin}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
        <p className='text-[14px] font-normal leading-[16px] text-[#3D3D3D]'>Enter your username and password to login.</p>
        <Input name='email' placeholder='almamun_uxui@gmail.com' type='email' inputClass='w-full'/>
        <div className='relative w-full'>
          <Input name='password' placeholder='***********' type={showPassword ? "text" : "password"} inputClass="w-full pr-10"/>
          <button type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-3 text-gray-500 focus:outline-none">
          {showPassword ? <PasswordBox/> : <PasswordBox/>}
        </button>
        </div>
        <p onClick={() => setIsLogin("forgotPassword")} className='text-[#46A358] text-end cursor-pointer'>Forgot Password?</p>
    </>
  )
}

export default LoginInputs