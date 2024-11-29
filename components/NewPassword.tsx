import React from 'react'
import Input from './Input'

const NewPassword = () => {
  return (
    <div>
        <Input name='newPassword' placeholder='Enter new password' type='password' inputClass='w-full'/>
        <Input name='otp' placeholder='Enter code' type='text' inputClass='w-full'/>
    </div>
  )
}

export default NewPassword