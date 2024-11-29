import React, { SetStateAction } from 'react'
import Input from './Input'

interface LoginType {
  setIsLogin:React.Dispatch<SetStateAction<"login" | "register" | "verifyRegister" | "forgotPassword" | "newPassword">>
}

const LoginInputs:React.FC<LoginType> = ({setIsLogin}) => {
  return (
    <>
        <Input name='email' placeholder='almamun_uxui@outlook.com' type='email' inputClass='w-full'/>
        <Input name='password' placeholder='***********' type='password' inputClass='w-full'/>
        <p onClick={() => setIsLogin("forgotPassword")} className='texxt-[#46A358] text-end cursor-pointer'>Forgot Password?</p>
    </>
  )
}

export default LoginInputs